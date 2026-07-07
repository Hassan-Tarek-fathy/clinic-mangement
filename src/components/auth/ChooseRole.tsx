"use client";

import {
  UserRound,
  Stethoscope,
  BriefcaseMedical,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Props = {
  back: () => void;
  patient: () => void;
  doctor: () => void;
  receptionist: () => void;
};

export default function ChooseRole({
  back,
  patient,
  doctor,
  receptionist,
}: Props) {
  return (
    <div>
      {/* Header */}

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Create Account
        </h2>

        <p className="mt-3 text-slate-500">
          Select your account type
        </p>
      </div>

      {/* Cards */}

      <div className="space-y-5">

        {/* Patient */}

        <button
          onClick={patient}
          className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:border-sky-500
          hover:shadow-xl
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-sky-100
              text-sky-600
              transition-all
              duration-300
              group-hover:rotate-6
              group-hover:scale-110
              "
            >
              <UserRound size={32} />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold">
                Patient
              </h3>

              <p className="text-sm text-slate-500">
                Book appointments and manage your visits.
              </p>
            </div>
          </div>

          <ArrowRight
            className="text-slate-400 transition group-hover:translate-x-2"
          />
        </button>

        {/* Doctor */}

        <button
          onClick={doctor}
          className="
          group
          flex
          w-full
          items-center
          justify-between
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-[1.02]
          hover:border-emerald-500
          hover:shadow-xl
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-emerald-100
              text-emerald-600
              transition-all
              duration-300
              group-hover:rotate-6
              group-hover:scale-110
              "
            >
              <Stethoscope size={32} />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold">
                Doctor
              </h3>

              <p className="text-sm text-slate-500">
                Registration requires admin approval.
              </p>
            </div>
          </div>

          <ArrowRight
            className="text-slate-400 transition group-hover:translate-x-2"
          />
        </button>

        {/* Receptionist */}

        <button
onClick={receptionist}className="group flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-white  p-5 shadow-sm  transition-all  duration-500   hover:-translate-y-1 hover:scale-[1.02] hover:border-violet-500  hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div
              className="  flex h-16  w-16  items-center  justify-center  rounded-2xl  bg-violet-100   text-violet-600    transition-all    duration-300  group-hover:rotate-6  group-hover:scale-110 " >  <BriefcaseMedical size={32} />
           </div>

            <div className="text-left">
              <h3 className="text-lg font-bold">
                Receptionist
              </h3>

              <p className="text-sm text-slate-500">
                Registration requires admin approval.
              </p>
            </div>
          </div>

          <ArrowRight
            className="text-slate-400 transition group-hover:translate-x-2"
          />
        </button>
      </div>

      {/* Back Button */}

      <button
        onClick={back}
        className=" flex w-full items-center justify-center gap-2 rounded-2xl  border  border-slate-300  py-4  font-semibol  text-slate-700 transition-all  hover:bg-slate-100  " >  <ArrowLeft size={18} />
        Back to Login
      </button>
    </div>
  );
}