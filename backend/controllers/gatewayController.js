import prisma from "../prisma/prisma.js";
import axios from "axios";
import { dateFormat } from "./../utils/DateFormat.js";
export const setGatewayKey = async (req, res) => {
  console.log("hi");
  try {
    const { key } = req.body;
    console.log(key);
    if (!key) {
      return res.status(400).json({
        status: false,
        message: "Client Side Error",
      });
    }
    const gateWayKey = await prisma.banksettings.findMany();
    if (gateWayKey.length) {
      await prisma.banksettings.updateMany({
        data: {
          key,
        },
      });
    } else {
      await prisma.banksettings.create({
        data: {
          key,
        },
      });
    }
    return res.status(200).json({
      status: true,
      message: "Gateway Details Successfully updated!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const getPaymentDetails = async (req, res, next) => {
  const { client_txn_id, txn_id } = req.query;
  if (!client_txn_id && !txn_id) {
    return next(
      new Error("The user belonging to this token does no longer exist.", 401)
    );
  }
  req.client_txn_id = client_txn_id;
  req.txn_id = txn_id;
  req.txn_date = dateFormat(new Date());
  next();
};

export const getTransectionDetails = async (req, res) => {
  const gateWayKey = await prisma.banksettings.findMany();
  const key = gateWayKey[0].key;
  const data = {
    key,
    txn_id: req.txn_id,
    client_txn_id: req.client_txn_id,
    txn_date: req.txn_date,
  };

  const response = await axios.post(
    "https://api.ekqr.in/api/check_order_status",
    data
  );
  if (response.data.status) {
    const resdata = response.data.data;
    const phone = resdata.customer_mobile;
    console.log(phone);
    await prisma.users.update({
      where: {
        phone,
      },
      data: {
        money: {
          increment: resdata.amount,
        },
      },
    });
    await prisma.aviatorrecharge.create({
      data: {
        amount: String(resdata.amount),
        customer_email: resdata.customer_email,
        customer_mobile: resdata.customer_mobile,
        customer_name: resdata.customer_name,
        client_txn_id: Number(resdata.client_txn_id),
        createdAt: resdata.createdAt,
        customer_vpa: resdata.customer_vpa,
        ip: resdata.ip,
        orderId: Number(req.txn_id),
        status: resdata.status,
        txnAt: resdata.txnAt,
        upi_txn_id: resdata.upi_txn_id,
      },
    });
    const errorMessage = encodeURIComponent(
      "Transection Sucessfull, Amount Has been added to your account!..."
    );
    const targetURL = `${process.env.client}/deposit?error=${errorMessage}`;
    return res.redirect(302, targetURL);
  } else {
    const errorMessage = encodeURIComponent(
      "Transection unsucessfull please try again!..."
    );
    const targetURL = `${process.env.client}/deposit?error=${errorMessage}`;
    return res.redirect(302, targetURL);
  }
};

export const setAdminAccount = async (req, res) => {
  try {
    const {
      bankName,
      accountNumber,
      accountHolderName,
      ifscCode,
      mobileNumber,
      upiId,
    } = req.body;
    const barCode = "/uploads/" + req.barCode;
    console.log(barCode);
    if (
      !bankName ||
      !accountNumber ||
      !accountHolderName ||
      !ifscCode ||
      !mobileNumber ||
      !upiId ||
      !barCode
    ) {
      return res.status(400).json({
        status: false,
        message: "Please provide all values...",
      });
    }
    const adminAccount = await prisma.adminbank.findMany();
    if (adminAccount.length) {
      await prisma.adminbank.updateMany({
        data: {
          bankName,
          accountNumber,
          accountHolderName,
          ifscCode,
          mobileNumber,
          upiId,
          barCode,
        },
      });
    } else {
      await prisma.adminbank.create({
        data: {
          bankName,
          accountNumber,
          accountHolderName,
          ifscCode,
          mobileNumber,
          upiId,
          barCode,
        },
      });
    }
    return res.status(200).json({
      status: true,
      message: "Account Details Successfully updated!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const getAdminBankDetails = async (req, res) => {
  try {
    const bank = await prisma.adminbank.findFirst({
      where: {
        id: 1,
      },
    });
    return res.status(200).json({
      status: true,
      data: bank,
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
      status: false,
    });
  }
};
