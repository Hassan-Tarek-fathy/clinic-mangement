"use client";

import { motion } from "framer-motion";
import AuthCard from "@/components/auth/AuthCard";
import {
  HeartPulse,
  Stethoscope,
  Building2,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-sky-300/25 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[-120px] bottom-[-120px] h-[550px] w-[550px] rounded-full bg-cyan-300/25 blur-[170px]"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]"
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-20 px-6 py-24 lg:flex-row">
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-5 py-2 text-sky-700 shadow backdrop-blur">
            <HeartPulse size={18} />

            Smart Clinic Management
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
            Modern Clinic
            <br />

            <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
              Management
            </span>

            <br />

            Made Simple.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Manage appointments, clinics, doctors, patients, reports and
            reception through one modern platform designed for speed,
            productivity and simplicity.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-sky-700">
              Get Started

              <ArrowRight size={18} />
            </button>

            <button className="rounded-2xl border bg-white px-7 py-4 font-semibold transition hover:bg-slate-100">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6">
            <StatCard
              icon={<Users size={30} />}
              number="15K+"
              title="Patients"
            />

            <StatCard
              icon={<Stethoscope size={30} />}
              number="150+"
              title="Doctors"
            />

            <StatCard
              icon={<Building2 size={30} />}
              number="20"
              title="Clinics"
            />

            <StatCard
              icon={<HeartPulse size={30} />}
              number="24/7"
              title="Support"
            />
          </div>
        </motion.div>

<motion.div
  initial={{
    opacity: 0,
    y: 50,
    scale: 0.9,
  }}
  animate={{
    opacity: 1,
    y: [0, -12, 0],
    scale: 1,
  }}
  transition={{
    opacity: {
      duration: 0.8,
    },
    scale: {
      duration: 0.8,
    },
    y: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="flex flex-1 justify-center self-start pt-4 lg:-mt-16 lg:justify-end"
>
  <AuthCard />
</motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  title,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
      rounded-3xl
      border
      border-white/40
      bg-white/70
      p-6
      shadow-xl
      backdrop-blur-xl
      "
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
        {icon}
      </div>

      <h2 className="text-3xl font-bold text-slate-900">
        {number}
      </h2>

      <p className="mt-2 text-slate-500">
        {title}
      </p>
    </motion.div>
  );
}