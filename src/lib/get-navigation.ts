import {
  adminNavigation,
  doctorNavigation,
  receptionistNavigation,
} from "./navigation";

export type UserRole =
  | "ADMIN"
  | "DOCTOR"
  | "RECEPTIONIST"
  | "PATIENT";

export function getNavigation(role: UserRole) {
  switch (role) {
    case "ADMIN":
      return adminNavigation;

    case "DOCTOR":
      return doctorNavigation;

    case "RECEPTIONIST":
      return receptionistNavigation;

    case "PATIENT":
      return [
        {
          title: "Dashboard",
          href: "/dashboard/patient",
          icon: adminNavigation[0].icon,
        },
      ];

    default:
      return [];
  }
}