"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
  change?: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-sky-100 text-sky-600",
  change,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: .25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>

          {change && (
            <p className="mt-3 text-sm font-medium text-emerald-600">
              {change}
            </p>
          )}
        </div>

        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color}`}>
          <Icon size={30} />
        </div>

      </div>
    </motion.div>
  );
}