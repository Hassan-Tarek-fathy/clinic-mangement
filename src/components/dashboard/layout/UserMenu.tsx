"use client";

import { UserCircle2 } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      className="flex items-center gap-3 rounded-xl border px-3 py-2 transition hover:bg-slate-100"
    >
      <UserCircle2 size={32} />

      <div className="text-left">
        <p className="font-semibold">
          Hassan Tarek
        </p>

        <p className="text-xs text-slate-500">
          Administrator
        </p>
      </div>
    </button>
  );
}