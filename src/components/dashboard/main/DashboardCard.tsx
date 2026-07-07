"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardCard({
  title,
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: .25 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-6 text-xl font-bold text-slate-900">
        {title}
      </h2>

      {children}
    </motion.div>
  );
}