import * as z from "zod";

export const patientRegisterSchema = z
  .object({
    name: z.string().min(3, "Name is required"),

    email: z.string().email(),

    phone: z
      .string()
      .min(11)
      .max(11),

    password: z
      .string()
      .min(8),

    confirmPassword: z.string(),

    gender: z.enum([
      "MALE",
      "FEMALE",
    ]),

    birthDate: z.string(),

    address: z.string().min(5),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );

export type PatientRegisterValues =
  z.infer<typeof patientRegisterSchema>;