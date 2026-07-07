"use client";

import { Mail, Lock, ArrowRight } from "lucide-react";

type Props = {
  goRegister: () => void;
};

export default function LoginForm({ goRegister }: Props) {
  return (
    <>
      <div className="mb-10 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Welcome Back 👋
        </h2>

        <p className="mt-3 text-slate-500">
          Login to your Clinic Management System
        </p>

      </div>

      <form className="space-y-6">

        {/* Email */}

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Email
          </label>

          <div className="relative">

            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input
              type="email" placeholder="example@email.com" className=" h-14 w-full rounded-2xl border border-slate-200 bg-white/80  pl-12 pr-4 outline-none transition-all   duration-300  focus:border-sky-500 focus:ring-4 focus:ring-sky-200   "  />

          </div>

        </div>

        {/* Password */}

        <div>

          <label className="mb-2 block font-medium text-slate-700">
            Password
          </label>

          <div className="relative">

            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />

            <input   type="password"   placeholder="********"  className="   h-14   w-full  rounded-2xl   border   border-slate-200  bg-white/80   pl-12  pr-4  outline-none  transition-all   duration-300   focus:border-sky-500 focus:ring-4 focus:ring-sky-200  "
            />

          </div>

        </div>

        {/* Login */}

        <button
          className="  group  flex  h-14  w-full  items-center  justify-center   gap-2  rounded-2xl  bg-gradient-to-r  from-sky-600   to-cyan-500   text-lg  font-semibold   text-white    shadow-xl   transition-all   duration-300    hover:scale-[1.03]    hover:shadow-2xl  "
     >
          Login

          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </form>

      <div className="my-8 flex items-center gap-3">

        <div className="h-px flex-1 bg-slate-200" />

        <span className="text-sm text-slate-400">
          OR
        </span>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

      <button
        onClick={goRegister}
        className=" w-full   rounded-2xl    border   border-slate-300   py-4  font-semibol    text-slate-700   transition-all   duration-300  hover:border-sky-50   hover:bg-sky-50  hover:text-sky-600 " >
        First time here? Register
      </button>
    </>
  );
}