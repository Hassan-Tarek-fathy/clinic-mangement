"use client";

type Props = {
  status: "Pending" | "Approved" | "Rejected" | "Completed" | "Cancelled";
};

const styles = {
  Pending: "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-rose-100 text-rose-700",
  Completed: "bg-sky-100 text-sky-700",
  Cancelled: "bg-slate-200 text-slate-700",
};

export default function StatusBadge({ status }: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}