"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import {
  patientRegisterSchema,
  PatientRegisterValues,
} from "@/schemas/patient.schema";

import {
  Role,
  AccountStatus,
  Gender,
} from "@prisma/client";

export async function registerPatient(
  values: PatientRegisterValues
) {
  try {
    // التحقق من البيانات
    const validated =
      patientRegisterSchema.safeParse(values);

    if (!validated.success) {
      return {
        success: false,
        message: "Invalid data.",
      };
    }

    const data = validated.data;

    // التأكد من أن البريد غير مستخدم
    const existingUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists.",
      };
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );

    // إنشاء User و Patient معًا
    await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: hashedPassword,
          role: Role.PATIENT,
          status: AccountStatus.APPROVED,
        },
      });

      await tx.patient.create({
        data: {
          userId: user.id,
          gender: data.gender as Gender,
          birthDate: new Date(data.birthDate),
          address: data.address,
        },
      });
    });

    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}