"use client";

import { Search } from "lucide-react";

type Props = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search...",
}: Props) {
  return (
    <div className="relative w-full max-w-md">

      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
      />

    </div>
  );
}