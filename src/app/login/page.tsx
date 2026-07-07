"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import {
  Activity,
  CalendarCheck2,
  Hospital,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    setLoginError("");

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        setLoginError("No account found. Please register first.");
      } else {
        setLoginError(result.error ?? "Login failed.");
      }
      setLoading(false);
      return;
    }

    const session = await getSession();

    setLoading(false);

    const role = (session?.user as any)?.role;

    switch (role) {
      case "ADMIN":
        router.push("/admin");
        break;

      case "DOCTOR":
        router.push("/doctor");
        break;

      case "RECEPTIONIST":
        router.push("/receptionist");
        break;

      case "PATIENT":
        router.push("/patient");
        break;

      default:
        router.push("/");
    }

    router.refresh();
  }

 return (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

    {/* Background Blur */}
    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[150px]" />

    <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">

      <div className="grid w-full items-center gap-16 lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:block">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-200 backdrop-blur">
            <Activity size={18} />
            Clinic Management Platform
          </div>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            Welcome
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Back
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
            Securely access your healthcare dashboard to manage patients,
            appointments, doctors and clinic operations from anywhere.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <Users className="mb-4 h-10 w-10 text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">1200+</h3>
              <p className="mt-2 text-slate-300">
                Patients
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <Hospital className="mb-4 h-10 w-10 text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">12</h3>
              <p className="mt-2 text-slate-300">
                Clinics
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <Activity className="mb-4 h-10 w-10 text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">80+</h3>
              <p className="mt-2 text-slate-300">
                Doctors
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <CalendarCheck2 className="mb-4 h-10 w-10 text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">15K+</h3>
              <p className="mt-2 text-slate-300">
                Appointments
              </p>
            </div>

          </div>

        </div>

        {/* Login Card */}

        <Card className="border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">

          <CardHeader className="space-y-3 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/20">
              <Hospital className="h-10 w-10 text-cyan-300" />
            </div>

            <CardTitle className="text-4xl font-bold text-white">
              Sign In
            </CardTitle>

            <CardDescription className="text-base text-slate-300">
              Welcome back to your clinic dashboard
            </CardDescription>

          </CardHeader>

          <CardContent>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >

              <div className="space-y-2">

                <Label
                  htmlFor="email"
                  className="text-slate-200"
                >
                  Email Address
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@example.com"
                  {...register("email")}
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400"
                />

                {errors.email && (
                  <p className="text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

              </div>

              <div className="space-y-2">

                <Label
                  htmlFor="password"
                  className="text-slate-200"
                >
                  Password
                </Label>

                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-slate-400 focus:border-cyan-400"
                />

                {errors.password && (
                  <p className="text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}

              </div>

              {loginError && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">

                  {loginError}

                  <Button
                    type="button"
                    variant="link"
                    onClick={() => router.push("/register/patient")}
                    className="ml-1 p-0 text-cyan-300 hover:text-cyan-200"
                  >
                    Register Now
                  </Button>

                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500"
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

            </form>

          </CardContent>

        </Card>

      </div>

    </div>

  </div>
);
}