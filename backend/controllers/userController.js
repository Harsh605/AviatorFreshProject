import prisma from "../prisma/prisma.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { promisify } from "util";
import jwt from "jsonwebtoken";
export const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  //  else if (req.cookies.jwt) {
  //   token = req.cookies.jwt;
  // }
  if (!token) {
    return res.redirect(302, `${process.env.client}/auth/login`);
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_ACCESS_TOKEN
  );
  // 3) Check if user still exists
  const currentUser = await prisma.users.findFirst({
    where: { phone: decoded.phone },
  });
  if (!currentUser) {
    return res.redirect(302, `${process.env.client}/auth/login`);
  }
  const bank = await prisma.bank.findFirst({
    where: { phone: decoded.phone },
  });
  const gateWayKey = await prisma.banksettings.findMany();
  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  // res.locals.user = currentUser;
  req.bank = bank;
  req.key = gateWayKey[0].key;
  next();
});
export const getUserInfo = async (req, res, next) => {
  try {
    return res.status(200).json({
      status: true,
      user: req.user,
      bank: req.bank,
      key: req.key,
    });
  } catch (err) {
    return res.status(404).json({
      status: false,
      message: err.message,
    });
  }
};
export const withDraw = async (req, res, next) => {
  try {
    const {
      phone,
      withdrawamount,
      bankName,
      accountNumber,
      upi,
      accountHolderName,
      ifsc,
    } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        phone,
      },
    });

    const email = user.email;
    const gender = user.gender;
    const name = user.name;
    if (user) {
      await prisma.withdraw.create({
        data: {
          phone,
          money: Number(withdrawamount),
          account: accountNumber,
          ifsc: ifsc,
          name_bank: bankName,
          name_user: accountHolderName,
          time: Date.now().toString(),
          stk: upi,
          email,
          gender,
          name,
        },
      });

      const bank = await prisma.bank.findFirst({
        where: {
          phone,
        },
      });
      if (!bank) {
        await prisma.bank.create({
          data: {
            phone: phone,
            account: accountNumber,
            ifsc: ifsc,
            name_bank: bankName,
            name_user: accountHolderName,
            stk: upi,
            email,
            gender,
            name,
          },
        });
      } else {
        await prisma.bank.updateMany({
          where: {
            phone,
          },
          data: {
            account: accountNumber,
            ifsc: ifsc,
            name_bank: bankName,
            name_user: accountHolderName,
            stk: upi,
          },
        });
      }
      await prisma.users.update({
        where: {
          phone: phone,
        },
        data: {
          money: {
            decrement: Number(withdrawamount),
          },
        },
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "User Not Found!...",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Money Debited successfull!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
export const transferMoney = async (req, res, next) => {
  try {
    const { phone, ownPhone, amount } = req.body;
    if (phone === ownPhone) {
      return res.status(400).json({
        status: false,
        message: "You Can't transfer money in your own account!..",
      });
    }
    const reuser = await prisma.users.findFirst({
      where: {
        phone,
      },
    });
    const seuser = await prisma.users.findMany({
      where: {
        phone: ownPhone,
      },
    });
    if (!reuser || !seuser) {
      return res.status(400).json({
        status: false,
        message: "User Not Found",
      });
    }
    if (Number(seuser.money) < Number(amount)) {
      return res.status(400).json({
        status: false,
        message: "Not Enough Money!...",
      });
    }
    await prisma.users.update({
      where: {
        phone: phone,
      },
      data: {
        money: {
          increment: Number(amount),
        },
      },
    });
    const newUser = await prisma.users.update({
      where: {
        phone: ownPhone,
      },
      data: {
        money: {
          decrement: Number(amount),
        },
      },
    });
    return res.status(200).json({
      status: true,
      message: "Money Succesfully Transefered!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
