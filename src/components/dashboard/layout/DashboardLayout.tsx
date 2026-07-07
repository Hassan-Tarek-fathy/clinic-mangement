import Sidebar from "./Sidebar";
import TopNavbar from "../../landing/TopNavbar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Fixed Header */}

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <TopNavbar />
        </header>

        {/* Page Content */}

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}