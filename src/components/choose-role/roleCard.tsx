import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export default function RoleCard({
  title,
  description,
  icon: Icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-2xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400/50
      hover:bg-white/10
      hover:shadow-[0_25px_60px_rgba(14,165,233,.25)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/20 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="
          mx-auto
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-sky-500
          to-cyan-400
          shadow-xl
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          "
        >
          <Icon className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <h2 className="mt-7 text-center text-2xl font-bold text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-center leading-7 text-slate-300">
          {description}
        </p>

        {/* Button */}
        <div
          className="
          mt-8
          flex
          items-center
          justify-center
          gap-2
          font-semibold
          text-cyan-300
          transition
          group-hover:text-white
          "
        >
          Continue

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}