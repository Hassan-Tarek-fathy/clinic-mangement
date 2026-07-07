"use client";

import {
  CalendarDays,
  Users,
  Stethoscope,
  Building2,
} from "lucide-react";

import StatCard from "@/components/dashboard/main/StatCard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Appointments"
        value="248"
        icon={CalendarDays}
        change="+12% this month"
      />

      <StatCard
        title="Doctors"
        value="28"
        icon={Stethoscope}
        color="bg-emerald-100 text-emerald-600"
      />

      <StatCard
        title="Patients"
        value="1,532"
        icon={Users}
        color="bg-violet-100 text-violet-600"
      />

      <StatCard
        title="Clinics"
        value="12"
        icon={Building2}
        color="bg-amber-100 text-amber-600"
      />

    </div>
  );
}