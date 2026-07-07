export interface PatientRegisterInput {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gender: "MALE" | "FEMALE";
  birthDate: string;
  address: string;
}