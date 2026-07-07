"use client";

import { Bell } from "lucide-react";

export default function NotificationMenu() {
  return (
    <button
     className="relative rounded-xl border p-2 transition hover:bg-slate-100"
    >
      <Bell size={20} />

      <span
       className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
      />
    </button>
  );
}