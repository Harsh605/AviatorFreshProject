import prisma from "./../prisma/prisma.js";
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
        phone,
      },
    });
    if (!user) {
      return res.json({
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
    const withdrawAmount = Math.floor(multiplier * aviator.betAmount);
    console.log(withdrawAmount);
    await prisma.aviator.update({
      where: {
        id: betId,
      },
      data: {
        withdrawAmount,
        multiplier,
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
