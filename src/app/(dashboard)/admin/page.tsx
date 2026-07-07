import PageHeader from "@/components/dashboard/main/PageHeader";
import DashboardStats from "./DashboardStats";
import RecentAppointments from "./RecentAppointments";
import PendingRequests from "./PendingRequests";
import RecentActivities from "./RecentActivities";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        description="Welcome back, Hassan. Here's what's happening today."
      />

      <DashboardStats />

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="space-y-8 xl:col-span-2">
          <RecentAppointments />
        </div>

        <div>
          <PendingRequests />
        </div>

      </div>

      <RecentActivities />

    </div>
  );
}