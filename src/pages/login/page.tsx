"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginValues = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: LoginValues) => {
    console.log(values);
    await new Promise((r) => setTimeout(r, 600));
    window.location.href = "/coffes"; // redireciona para a página principal após login
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="bg-gradient-to-br from-surface-800 to-surface-400">
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-surface-900 rounded-3xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center">
            {/* Logo */}
            <div className="mb-10 text-center">
              <img
                src="/logo/logo.svg"
                alt="Coffee Vibes Logo"
                className="mx-auto w-32 h-auto"
                draggable={false}
              />
            </div>

            <div className="w-full border-t border-surface-700/40 mb-8" />

            {/* Formulário */}
            <form
              className="w-full flex flex-col gap-5"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-primary text-lg font-rosarivo font-medium mb-1">
                Sign in
              </label>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-md px-4 py-2 bg-primary text-surface-900 placeholder:text-neutral focus:outline-none focus:ring-2 transition ${
                    errors.email ? "focus:ring-wrong" : "focus:ring-primary"
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="text-wrong text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative flex flex-col gap-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                  className={`w-full rounded-md px-4 py-2 bg-primary text-surface-900 placeholder:text-neutral focus:outline-none focus:ring-2 transition pr-10 ${
                    errors.password ? "focus:ring-wrong" : "focus:ring-primary"
                  }`}
                  {...register("password")}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                {errors.password && (
                  <p id="password-error" className="text-wrong text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !(isDirty && isValid)}
                className="w-full bg-light text-surface-900 font-rosario font-semibold rounded-md py-2 mt-2 hover:bg-primary-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Signing in..." : "SIGN IN"}
              </button>

              {/* Link para registro */}
              <div className="mt-4 text-sm text-primary text-center">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="font-semibold underline hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-focus rounded"
                >
                  Create one
                </a>
              </div>
            </form>

            <div className="w-full border-t border-dashed border-surface-700/40 mt-10" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
