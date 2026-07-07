"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  Calendar,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Props = {
  back: () => void;
};

export default function PatientRegister({ back }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Patient Registration
        </h2>

        <p className="mt-3 text-slate-500">
          Create your patient account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">

        {/* Full Name */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Hassan Tarek"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Email
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Phone
          </label>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="01000000000"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Gender */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>

        {/* Birth Date */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Birth Date
          </label>

          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>
                {/* Address */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Address
          </label>

          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Cairo, Egypt"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="mb-1 block font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 outline-none transition duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-200"
            />
          </div>
        </div>

        {/* Register Button */}

        <button
          type="submit"
          className="group flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
        >
          Create Account

          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>

        {/* Divider */}

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-sm text-slate-400">
            OR
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Back */}

        <button
          type="button"
          onClick={back}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 text-slate-700 font-semibold transition-all duration-300 hover:bg-slate-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

      </form>
    </>
  );
}