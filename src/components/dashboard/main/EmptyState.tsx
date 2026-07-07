"use client";

import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function EmptyState({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white py-20">

      <div className="mb-6 rounded-full bg-slate-100 p-5">
        <Icon size={42} className="text-slate-400" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-500">
        {description}
      </p>

    </div>
  );
}