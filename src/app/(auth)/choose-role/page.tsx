import Background from "@/components/choose-role/Background";
import Footer from "@/components/choose-role/Footer";
import Hero from "@/components/landing/Hero";
import RoleGrid from "@/components/choose-role/RoleGrid";

export default function ChooseRolePage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900">

      <Background />

      <div className="relative z-10">

        <Hero />

        <section
          id="roles"
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="mb-14 text-center">

            <h2 className="text-4xl font-bold text-white">
              Continue As
            </h2>

            <p className="mt-4 text-slate-300">
              Choose your role to continue
            </p>

          </div>

          <RoleGrid />
        </section>

        <Footer />

      </div>
    </main>
  );
}