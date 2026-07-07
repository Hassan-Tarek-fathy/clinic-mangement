"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: LucideIcon;
  color?: string;
  onClick?: () => void;
};

export default function ActionButton({
  title,
  icon: Icon,
  color = "bg-sky-600",
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: .95 }}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white shadow transition ${color}`}
    >
      <Icon size={18} />
      {title}
    </motion.button>
  );
}