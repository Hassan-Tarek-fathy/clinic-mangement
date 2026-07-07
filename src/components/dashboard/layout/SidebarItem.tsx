"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
  icon: LucideIcon;
  collapsed: boolean;
};

export default function SidebarItem({
  href,
  title,
  icon: Icon,
  collapsed
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
        active
          ? "bg-cyan-500 text-white shadow-lg"
          : "text-slate-600 hover:bg-slate-100 hover:text-cyan-600"
      }`}
    >
      <Icon size={22} />

     <span
  className={`font-medium transition-all ${
    collapsed ? "hidden" : "block"
  }`}
>
  {title}
</span>
    </Link>
  );
}