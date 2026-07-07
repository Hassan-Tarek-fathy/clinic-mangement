import { Activity } from "lucide-react";
import Link from "next/link";

type Props = {
  collapsed: boolean;
};

export default function Logo({ collapsed }: Props) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 border-b border-slate-200 p-6"
    >
      <div className="rounded-xl bg-cyan-500 p-3 text-white">
        <Activity size={22} />
      </div>

      {!collapsed && (
        <div>
          <h1 className="text-lg font-bold">Clinic MS</h1>

          <p className="text-xs text-slate-500">
            Management System
          </p>
        </div>
      )}
    </Link>
  );
}