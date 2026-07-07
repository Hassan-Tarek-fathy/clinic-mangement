import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Building2,
  CalendarDays,
  ChartColumn,
  Settings,
  ClipboardList,
  FileText,
  Receipt,
  Clock3,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: any;
};

export const adminNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Doctors",
    href: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    title: "Clinics",
    href: "/admin/clinics",
    icon: Building2,
  },
  {
    title: "Appointments",
    href: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: ChartColumn,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export const doctorNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/doctor",
    icon: LayoutDashboard,
  },
  {
    title: "Schedule",
    href: "/doctor/schedule",
    icon: CalendarDays,
  },
  {
    title: "Patients",
    href: "/doctor/patients",
    icon: Users,
  },
  {
    title: "Medical Records",
    href: "/doctor/medical-records",
    icon: ClipboardList,
  },
  {
    title: "Prescriptions",
    href: "/doctor/prescriptions",
    icon: FileText,
  },
];

export const receptionistNavigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/receptionist",
    icon: LayoutDashboard,
  },
  {
    title: "Appointments",
    href: "/receptionist/appointments",
    icon: CalendarDays,
  },
  {
    title: "Patients",
    href: "/receptionist/patients",
    icon: Users,
  },
  {
    title: "Invoices",
    href: "/receptionist/invoices",
    icon: Receipt,
  },
  {
    title: "Queue",
    href: "/receptionist/queue",
    icon: Clock3,
  },
];