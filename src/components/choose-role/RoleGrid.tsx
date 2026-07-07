import {
  User,
  Stethoscope,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

import RoleCard from "./roleCard"
export default function RoleGrid() {
  return (
<div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 xl:grid-cols-4">
      <RoleCard
        title="Patient"
        description="Create account and book appointments"
        icon={User}
        href="/register?role=patient"
      />

      <RoleCard
        title="Doctor"
        description="Doctor Login"
        icon={Stethoscope}
        href="/login?role=doctor"
      />

      <RoleCard
        title="Receptionist"
        description="Reception Login"
        icon={ClipboardList}
        href="/login?role=receptionist"
      />

      <RoleCard
        title="Admin"
        description="Admin Login"
        icon={ShieldCheck}
        href="/login?role=admin"
      />

    </div>
  );
}