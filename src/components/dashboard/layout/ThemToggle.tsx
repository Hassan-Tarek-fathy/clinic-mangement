"use client";

import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      className="rounded-xl border p-2 transition hover:bg-slate-100"
    >
      <Moon size={20} />
    </button>
  );
}