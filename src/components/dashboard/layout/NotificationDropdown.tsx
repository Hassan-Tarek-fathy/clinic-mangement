"use client";

import { Bell, Calendar, UserPlus, Stethoscope } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";

const notifications = [
  {
    id: 1,
    title: "New Appointment",
    message: "Ahmed booked an appointment",
    time: "2 min ago",
    icon: Calendar,
  },
  {
    id: 2,
    title: "New Patient",
    message: "Sara registered",
    time: "10 min ago",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Doctor Added",
    message: "Dr. Mohamed joined",
    time: "1 hour ago",
    icon: Stethoscope,
  },
];

export default function NotificationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative rounded-xl border p-2 hover:bg-slate-100">
          <Bell size={20} />

          <Badge className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full p-0 flex items-center justify-center">
            {notifications.length}
          </Badge>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-96"
      >
        <DropdownMenuLabel>
          Notifications
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <DropdownMenuItem
              key={item.id}
              className="items-start gap-3 py-4"
            >
              <div className="rounded-lg bg-cyan-100 p-2">
                <Icon
                  size={18}
                  className="text-cyan-700"
                />
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.message}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {item.time}
                </p>
              </div>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="justify-center font-medium text-cyan-600">
          View All Notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}