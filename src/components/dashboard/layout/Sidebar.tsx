"use client";

import {
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

import { useSidebar } from "@/store/sidebar-store";
import { getNavigation } from "@/lib/get-navigation";

export default function Sidebar() {
  const { collapsed, toggle } = useSidebar();

  const role = "ADMIN";

  const navigation = getNavigation(role);

  return (
    <aside
      className={`sticky top-0 flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* Logo */}

      <div className="border-b border-slate-100">
        <Logo collapsed={collapsed} />
      </div>

      {/* Collapse */}

      <div className="flex justify-center py-5">
        <button
          onClick={toggle}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 overflow-y-auto px-4 pb-6">

        {navigation.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            title={item.title}
            icon={item.icon}
            collapsed={collapsed}
          />
        ))}

      </nav>

      {/* Logout */}

      <div className="border-t border-slate-200 p-4">

        <button
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-50 py-3 text-red-600 transition-all hover:bg-red-100"
        >
          <LogOut size={20} />

          {!collapsed && (
            <span className="font-medium">
              Logout
            </span>
          )}

        </button>

      </div>
    </aside>
  );
}