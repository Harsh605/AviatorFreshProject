import prisma from "./../prisma/prisma.js";
import { millisecondsToDateString } from "./../utils/millisecondsToDateString.js";
export const placeBet = async (req, res, next) => {
  try {
    const { phone, betAmount } = req.body;
    if (!phone && !betAmount) {
      return res.status(400).json({
        status: false,
        message: "Request body not defined",
      });
    }
    const user = await prisma.users.findFirst({
      where: {
        phone,
      },
    });
    if (!user) {
      return res.json({
        status: false,
        message: "User Not Found!...",
      });
    }
    await prisma.users.update({
      where: {
        phone,
      },
      data: {
        money: {
          decrement: Number(betAmount),
        },
      },
    });
    const newbet = await prisma.aviator.create({
      data: {
        betAmount: Number(betAmount),
        phone: Number(phone),
      },
    });
    console.log(newbet);
    return res.status(200).json({
      status: true,
      message: "Bet Successfully Placed!..",
      betId: newbet.id,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const withdrawBet = async (req, res, next) => {
  try {
    console.log(req.body);
    if (!req.body) {
      return res.status(400).json({
        status: false,
        message: "Request body not defined",
      });
    }
    const { phone, multiplier, betId } = req.body;
    const user = await prisma.users.findFirst({
      where: {
        phone: phone,
      },
    });
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User Not Found!...",
      });
    }

    const aviator = await prisma.aviator.findFirst({
      where: {
        id: Number(betId),
      },
    });

    console.log(aviator);
    const withdrawAmount = Math.floor(Number(multiplier) * aviator.betAmount);
    console.log(withdrawAmount);
    await prisma.aviator.update({
      where: {
        id: betId,
      },
      data: {
        withdrawAmount,
        multiplier: Number(multiplier),
      },
    });
    await prisma.users.update({
      where: {
        phone,
      },
      data: {
        money: {
          increment: Number(withdrawAmount),
        },
      },
    });

    return res.status(200).json({
      status: true,
      message: "Money succesfully added to Your account",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const crashedPlaneSettings = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({
        status: false,
        message: "Request body not defined",
      });
    }

    const { nl, nh, sl, sh, sp, sm, ml, mh, mr, da } = req.body;
    if (nl && nh) {
      console.log(nl, nh, "s");
      await prisma.crashedplane.update({
        where: {
          id: 1,
        },
        data: {
          nl: String(nl),
          nh: String(nh),
        },
      });

      return res.status(200).json({
        status: true,
        message: "Settings Updated",
      });
    }
    if (sl && sh && sp && sm) {
      await prisma.crashedplane.update({
        where: {
          id: 1,
        },
        data: {
          sl: String(sl),
          sh: String(sh),
          sm: String(sm),
          sp: String(sp),
        },
      });
      return res.status(200).json({
        status: true,
        message: "Settings Updated",
      });
    }
    if (ml && mh && mr) {
      const updateData = {
        ml: String(ml),
        mh: String(mh),
        mr: String(mr),
      };

      if (da) {
        updateData.da = String(da);
      }

      await prisma.crashedplane.update({
        where: {
          id: 1,
        },
        data: updateData,
      });
      return res.status(200).json({
        status: true,
        message: "Settings Updated",
      });
    }

    return res.status(200).json({
      status: false,
      message: "Please fill Require Fields",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const getCrashedPlaneSettings = async (req, res, next) => {
  try {
    const settings = await prisma.crashedplane.findFirst({
      where: {
        id: 1,
      },
    });
    return res.status(200).json({
      status: true,
      message: "data Found!....",
      data: settings,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const totalSumAmount = async (req, res, next) => {
  try {
    const settings = await prisma.betTime.findFirst({
      where: {
        id: 1,
      },
    });

    const oneMinuteAgo = new Date();
    oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 1);

    const betData = await prisma.aviator.findMany({
      where: {
        betTime: {
          gte: oneMinuteAgo.toISOString(), // Greater than or equal to one minute ago
        },
      },
    });

    const betTimesInMilliseconds = betData.map((item) => ({
      ...item,
      betTime: Number(new Date(item.betTime).getTime()), // Convert betTime to milliseconds
    }));
    const lowertime = Number(settings.time);
    const uppertime = lowertime + 15000;
    const filteredBetData = betTimesInMilliseconds.filter((item) => {
      const betTimeInMilliseconds = item.betTime;
      return betTimeInMilliseconds > lowertime && betTimeInMilliseconds < uppertime;
    });
    const sumOfAmount = filteredBetData.reduce((sum, item) => sum + item.betAmount, 0);
    return res.status(200).json({
      status: true,
      message: "data Found!....",
      data: betTimesInMilliseconds,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
