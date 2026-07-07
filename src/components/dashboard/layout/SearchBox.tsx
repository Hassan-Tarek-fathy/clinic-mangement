"use client";

import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="relative hidden md:block">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search..."
        className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-cyan-500"
      />
    </div>
  );
}