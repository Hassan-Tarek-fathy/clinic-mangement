import { prisma } from "@/lib/prisma";
import { Role, AccountStatus } from "@prisma/client";
import bcrypt from "bcrypt";

async function createAdmin() {
  try {
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: "hasstarek@gmail.com",
      },
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists.");
      return;
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    await prisma.user.create({
      data: {
        name: "hassan tarek",
        email: "hasstarek@gmail.com",
        password: hashedPassword,
        phone: "01028936921",
        role: Role.ADMIN,
        status: AccountStatus.APPROVED,
      },
    });

    console.log("🎉 Admin created successfully.");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();