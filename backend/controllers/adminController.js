import prisma from "./../prisma/prisma.js";
export const setReferDetatails = async (req, res) => {
  try {
    const { parentCommission, friendCommission, notReferCommission, mwa } =
      req.body;
    if (!parentCommission && !friendCommission && !notReferCommission && !mwa) {
      return res.status(400).json({
        status: false,
        message: "Request body not defined",
      });
    }
    await prisma.refer.update({
      where: {
        id: 1,
      },
      data: {
        parentCommission: Number(parentCommission),
        friendCommission: Number(friendCommission),
        notReferCommission: Number(notReferCommission),
        mwa: Number(mwa),
      },
    });

    return res.status(200).json({
      status: true,
      message: "Refer Details Successfully updated!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const getReferDetails = async (req, res) => {
  try {
    const refer = await prisma.refer.findFirst({
      where: {
        id: 1,
      },
    });
    return res.status(200).json({
      status: true,
      data: refer,
    });
  } catch (err) {
    return res.status(401).json({
      message: err.message,
      status: false,
    });
  }
};
export const getAllBetData = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const alldata = await prisma.aviator.findMany();
    const data = await prisma.aviator.findMany({
      skip: Number(skip),
      take: Number(limit),
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      status: true,
      message: "BetData Successfully fetched!...",
      data,
      length: alldata.length,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const acceptWithdraw = async (req, res) => {
  try {
    const { id, status, money, phone } = req.body;
    console.log(
      "🚀 ~ acceptWithdraw ~ id, status, money, phone:",
      id,
      status,
      money,
      phone
    );

    if (!id || !status || !phone || !money) {
      return res.status(400).json({
        status: false,
        message: "Client Side error",
      });
    }
    console.log("hi");

    await prisma.withdraw.update({
      where: {
        id: Number(id),
      },
      data: {
        status: Number(status),
      },
    });
    if (status === "2") {
      await prisma.users.update({
        where: {
          phone,
        },
        data: {
          money: {
            increment: Number(money),
          },
        },
      });
    }

    return res.status(200).json({
      status: true,
      message: "Successfully updated!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
export const getAllWithdrawalRequest = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const alldata = await prisma.withdraw.findMany({
      // where: {
      //   status: {
      //     not: 2,
      //   },
      // },
    });
    console.log("🚀 ~ getAllWithdrawalRequest ~ alldata:", alldata.length);
    const data = await prisma.withdraw.findMany({
      skip: Number(skip),
      take: Number(limit),
      orderBy: {
        id: "desc",
      },
      // where: {
      //   status: {
      //     not: 2,
      //   },
      // },
    });

    return res.status(200).json({
      status: true,
      message: "WithdrawalData Successfully fetched!...",
      data,
      length: alldata.length,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
export const getAllUserData = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const alldata = await prisma.users.findMany({
      where: {
        token: {
          not: "0",
        },
      },
    });
    const data = await prisma.users.findMany({
      skip: Number(skip),
      take: Number(limit),
      orderBy: {
        id: "desc",
      },
      where: {
        token: {
          not: "0",
        },
      },
    });

    return res.status(200).json({
      status: true,
      message: "userData Successfully fetched!...",
      data,
      length: alldata.length,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
export const userSettings = async (req, res) => {
  try {
    const { id, status, money, phone } = req.body;
    if (!id || !phone) {
      return res.status(400).json({
        status: false,
        message: "Client Side error",
      });
    }
    if (money) {
      await prisma.users.update({
        where: {
          phone,
        },
        data: {
          money: Number(money),
        },
      });
    }
    if (status) {
      await prisma.users.update({
        where: {
          phone,
        },
        data: {
          status: Number(status),
        },
      });
    }
    return res.status(200).json({
      status: true,
      message: "Successfully updated!...",
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};

export const getAllRechargeDetails = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const skip = (page - 1) * limit;
    const alldata = await prisma.aviatorrecharge.findMany();
    const data = await prisma.aviatorrecharge.findMany({
      skip: Number(skip),
      take: Number(limit),
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      status: true,
      message: "RechargeData Successfully fetched!...",
      data,
      length: alldata.length,
    });
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: err.message,
    });
  }
};
