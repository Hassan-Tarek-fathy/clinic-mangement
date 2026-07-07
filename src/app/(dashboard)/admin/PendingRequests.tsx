"use client";

import {
  Check,
  Eye,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

import DashboardCard from "@/components/dashboard/main/DashboardCard";

const requests = [
  {
    id: 1,
    name: "Dr. Ahmed Mohamed",
    role: "Cardiologist",
    type: "Doctor",
  },
  {
    id: 2,
    name: "Sara Mahmoud",
    role: "Receptionist",
    type: "Receptionist",
  },
  {
    id: 3,
    name: "Dr. Ibrahim Adel",
    role: "Dermatologist",
    type: "Doctor",
  },
];

export default function PendingRequests() {
  return (
    <DashboardCard title="Pending Registration Requests">

      <div className="space-y-5">

        {requests.map((request) => (
          <div
            key={request.id}
            className="flex flex-col gap-5 rounded-3xl border border-slate-200 p-5 transition hover:border-sky-300 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">

                {request.type === "Doctor" ? (
                  <Stethoscope size={30} />
                ) : (
                  <UserRound size={30} />
                )}

              </div>

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {request.name}
                </h3>

                <p className="text-slate-500">
                  {request.role}
                </p>

                <span className="mt-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  Pending Approval
                </span>

              </div>

            </div>

            <div className="flex flex-wrap gap-3">

              <button className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-100">
                <Eye size={18} />
                View
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700">
                <Check size={18} />
                Approve
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2 text-white transition hover:bg-rose-700">
                <X size={18} />
                Reject
              </button>

            </div>

          </div>
        ))}

      </div>

    </DashboardCard>
  );
}