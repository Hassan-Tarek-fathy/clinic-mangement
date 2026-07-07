"use client";

import {
  User,
  Mail,
  Phone,
  Building2,
  Lock,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Props = {
  back: () => void;
};

export default function ReceptionistRegister({
  back,
}: Props) {
  return (
    <>
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          Receptionist Registration
        </h2>

        <p className="mt-3 text-slate-500">
          Waiting for Admin Approval
        </p>
      </div>

      <form className="space-y-5">

        <Input icon={<User size={20}/>} placeholder="Full Name"/>

        <Input icon={<Mail size={20}/>} placeholder="Email"/>

        <Input icon={<Phone size={20}/>} placeholder="Phone"/>

        <Input icon={<Building2 size={20}/>} placeholder="Assigned Clinic"/>

        <Input icon={<Lock size={20}/>} type="password" placeholder="Password"/>

        <Input icon={<Lock size={20}/>} type="password" placeholder="Confirm Password"/>

        <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 font-semibold text-white">
          Send Request

          <ArrowRight className="transition group-hover:translate-x-1"/>
        </button>

      </form>

      <button
        onClick={back}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border py-4"
      >
        <ArrowLeft size={18}/>
        Back
      </button>
    </>
  );
}

function Input({ icon, ...props }: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>

      <input
        {...props}
        className="h-14 w-full rounded-2xl border border-slate-200 pl-12 pr-4 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
      />
    </div>
  );
}