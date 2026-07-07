"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HeartPulse } from "lucide-react";

const links = [
  { title: "Home", href: "/" },
  { title: "Doctors", href: "#doctors" },
  { title: "Clinics", href: "#clinics" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg">
            <HeartPulse size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              ClinicMS
            </h1>

            <p className="text-xs text-slate-500">
              Clinic Management System
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-medium text-slate-600 transition hover:text-sky-600"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2 font-medium text-white shadow-lg transition hover:scale-105">
            Register
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 p-6">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
              >
                {link.title}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <button className="rounded-xl border py-3">
                Login
              </button>

              <button className="rounded-xl bg-sky-600 py-3 text-white">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}