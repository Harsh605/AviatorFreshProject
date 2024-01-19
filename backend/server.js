// main.js
import prisma from "./prisma/prisma.js";

const main = async () => {
  try {
    // await prisma.users.deleteMany({ where: { phone: "8442056834" } });
    await prisma.crashedplane.create()
    // const users = await prisma.users.findMany();
    // console.log(users.length);
  } catch (err) {
    console.log(err.message);
  } finally {
    await prisma.$disconnect();
  }
};

main();
