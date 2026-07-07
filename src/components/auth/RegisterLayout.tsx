"use client";

import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
  progress: number;
  back: () => void;
};

export default function RegisterLayout({
  title,
  description,
  children,
  progress,
  back,
}: Props) {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <button
          onClick={back}
          className="
          mb-6
          flex
          items-center
          gap-2
          rounded-xl
          border
          px-4
          py-2
          transition
          hover:bg-slate-100
          "
        >
          <ArrowLeft size={18} />

          Back
        </button>

        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-slate-500">
          {description}
        </p>

      </div>

      {/* Progress */}

      <div>

        <div className="mb-2 flex justify-between text-sm text-slate-500">
          <span>Registration</span>

          <span>{progress}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            style={{
              width: `${progress}%`,
            }}
            className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-sky-500
            to-cyan-500
            transition-all
            duration-700
            "
          />

        </div>

      </div>

      {/* Form */}

      <div className="space-y-5">

        {children}

      </div>

    </div>
  );
}