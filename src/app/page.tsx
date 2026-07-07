import Hero from "@/components/landing/Hero";
import TopNavbar from "@/components/landing/TopNavbar";

export default function HomePage() {
  return (
    <>
      <TopNavbar />
      <main className="pt-20">
                <Hero />

      </main>
    </>
  );
}