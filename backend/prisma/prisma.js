// prisma.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// By using this approach, we will ensure that the prisma instance is shared across our application, and we won't create a new database connection every time for our import in different files.
export default prisma;
