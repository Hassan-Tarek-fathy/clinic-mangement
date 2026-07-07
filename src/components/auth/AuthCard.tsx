"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoginForm from "./LoginForm";
import ChooseRole from "./ChooseRole";
import PatientRegister from "./PatientRegister";
import DoctorRegister from "./DoctorRegister";
import ReceptionistRegister from "./ReceptionistRegister";

export type AuthStep =
  | "login"
  | "roles"
  | "patient"
  | "doctor"
  | "receptionist";

export default function AuthCard() {
  const [step, setStep] = useState<AuthStep>("login");

  const pages = {
    login: (
      <LoginForm
        goRegister={() => setStep("roles")}
      />
    ),

    roles: (
      <ChooseRole
        back={() => setStep("login")}
        patient={() => setStep("patient")}
        doctor={() => setStep("doctor")}
        receptionist={() => setStep("receptionist")}
      />
    ),

    patient: (
      <PatientRegister
        back={() => setStep("roles")}
      />
    ),

    doctor: (
      <DoctorRegister
        back={() => setStep("roles")}
      />
    ),

    receptionist: (
      <ReceptionistRegister
        back={() => setStep("roles")}
      />
    ),
  };

  return (
    <div
      className="relative w-full max-w-xl overflow-hidden rounded-[36px] border border-white/40 bg-white/80 shadow-[0_40px_120px_rgba(15,23,42,.18)] backdrop-blur-xl"
      style={{ perspective: "2000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{
            rotateY: 90,
            x: 180,
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            rotateY: 0,
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            rotateY: -90,
            x: -180,
            opacity: 0,
            scale: 0.94,
          }}
          transition={{  duration: 0.75,  ease: [0.22, 1, 0.36, 1], }} style={{ transformStyle: "preserve-3d",transformOrigin: "left center",  }}
          className="relative p-10"
        >
          {/* Book Shadow */}

          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-black/10 via-black/5 to-transparent" />

          {/* Light */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

          {pages[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}