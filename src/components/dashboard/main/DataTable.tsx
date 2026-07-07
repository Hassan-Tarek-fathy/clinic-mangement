"use client";

import { ReactNode } from "react";

type Column = {
  key: string;
  title: string;
};

type Props = {
  columns: Column[];
  children: ReactNode;
};

export default function DataTable({
  columns,
  children,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-sm font-semibold text-slate-600"
                >
                  {column.title}
                </th>
              ))}

            </tr>

          </thead>

          <tbody className="divide-y divide-slate-100">

            {children}

          </tbody>

        </table>

      </div>

    </div>
  );
}