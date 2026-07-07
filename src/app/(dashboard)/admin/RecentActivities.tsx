"use client";

import {
  CalendarCheck,
  Building2,
  UserPlus,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

import DashboardCard from "@/components/dashboard/main/DashboardCard";

const activities = [
  {
    id: 1,
    icon: CalendarCheck,
    title: "Ahmed Hassan booked an appointment",
    time: "2 min ago",
    color: "bg-sky-100 text-sky-600",
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Dr. Mohamed Ali joined the clinic",
    time: "15 min ago",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 3,
    icon: Building2,
    title: "New clinic added successfully",
    time: "1 hour ago",
    color: "bg-violet-100 text-violet-600",
  },
  {
    id: 4,
    icon: UserPlus,
    title: "Receptionist account approved",
    time: "3 hours ago",
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: 5,
    icon: CheckCircle2,
    title: "Appointment completed",
    time: "Yesterday",
    color: "bg-rose-100 text-rose-600",
  },
];

export default function RecentActivities() {
  return (
    <DashboardCard title="Recent Activities">
      <div className="space-y-6">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="relative flex gap-4"
            >
              {index !== activities.length - 1 && (
                <div className="absolute left-6 top-14 h-full w-px bg-slate-200" />
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activity.color}`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1 pb-3">
                <h3 className="font-semibold text-slate-800">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}