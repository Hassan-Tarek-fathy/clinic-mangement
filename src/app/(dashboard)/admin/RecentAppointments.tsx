"use client";

import DashboardCard from "@/components/dashboard//main/DashboardCard";
import DataTable from "@/components/dashboard/main/DataTable";
import StatusBadge from "@/components/dashboard/main/StatusBadge";

const columns = [
  {
    key: "patient",
    title: "Patient",
  },
  {
    key: "doctor",
    title: "Doctor",
  },
  {
    key: "clinic",
    title: "Clinic",
  },
  {
    key: "date",
    title: "Date",
  },
  {
    key: "status",
    title: "Status",
  },
];

const appointments = [
  {
    patient: "Ahmed Hassan",
    doctor: "Dr. Mohamed Ali",
    clinic: "Cardiology",
    date: "12 Jul 2026",
    status: "Pending",
  },
  {
    patient: "Sara Mahmoud",
    doctor: "Dr. Nada Samy",
    clinic: "Dental",
    date: "12 Jul 2026",
    status: "Approved",
  },
  {
    patient: "Omar Tarek",
    doctor: "Dr. Ahmed Salah",
    clinic: "Orthopedic",
    date: "13 Jul 2026",
    status: "Completed",
  },
  {
    patient: "Mona Adel",
    doctor: "Dr. Ibrahim",
    clinic: "Neurology",
    date: "13 Jul 2026",
    status: "Cancelled",
  },
];

export default function RecentAppointments() {
  return (
    <DashboardCard title="Recent Appointments">

      <DataTable columns={columns}>

        {appointments.map((appointment, index) => (
          <tr
            key={index}
            className="transition hover:bg-slate-50"
          >
            <td className="px-6 py-4 font-medium">
              {appointment.patient}
            </td>

            <td className="px-6 py-4">
              {appointment.doctor}
            </td>

            <td className="px-6 py-4">
              {appointment.clinic}
            </td>

            <td className="px-6 py-4">
              {appointment.date}
            </td>

            <td className="px-6 py-4">
              <StatusBadge
                status={appointment.status as any}
              />
            </td>
          </tr>
        ))}

      </DataTable>

    </DashboardCard>
  );
}