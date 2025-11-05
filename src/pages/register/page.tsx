"use client";

import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonRouterLink,
  useIonRouter,
} from "@ionic/react";
import { Eye, EyeOff } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"; // shadcn button (keeps Tailwind)

const RegisterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email"),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(32, "Username is too long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Add at least one uppercase letter")
    .regex(/[a-z]/, "Add at least one lowercase letter")
    .regex(/[0-9]/, "Add at least one number"),
});

type RegisterValues = z.infer<typeof RegisterSchema>;

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useIonRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
    defaultValues: { email: "", username: "", password: "" },
  });

  const onSubmit = async (values: RegisterValues) => {
    // Simulate API
    await new Promise((r) => setTimeout(r, 600));
    // Navigate with Ionic router (avoid <Redirect /> inside handlers)
    router.push("/coffes", "forward");
  };

  return (
    <IonPage className="bg-gradient-to-br from-surface-800 to-surface-400">
      <IonHeader className="bg-transparent shadow-none">
        <IonToolbar className="bg-transparent">
          <IonTitle className="text-primary font-rosarivo">Coffee Vibes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="flex items-center justify-center">
        <IonGrid fixed>
          <IonRow className="justify-center">
            <IonCol size="12" sizeMd="6" sizeLg="4">
              <div className="bg-surface-900 rounded-3xl shadow-2xl w-full p-8 flex flex-col items-center">
                <div className="mb-10 text-center">
                  <img
                    src="/logo/logo.svg"
                    alt="Coffee Vibes Logo"
                    className="mx-auto w-32 h-auto"
                    draggable={false}
                  />
                </div>

                <div className="w-full border-t border-surface-700/40 mb-8" />

                <form className="w-full flex flex-col gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <label className="text-primary text-lg font-rosarivo font-medium mb-1">Register</label>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <IonItem lines="none" className="rounded-md px-0 bg-transparent">
                      <IonLabel position="stacked" className="sr-only">
                        Email
                      </IonLabel>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <IonInput
                            type="email"
                            placeholder="Email"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            value={field.value}
                            onIonInput={(e) => field.onChange(e.detail.value ?? "")}
                            onIonBlur={field.onBlur}
                            className="w-full rounded-md px-4 py-2 bg-primary text-surface-900 placeholder:text-neutral focus:outline-none focus:ring-2 transition data-[focus=true]:ring-2"
                          />
                        )}
                      />
                    </IonItem>
                    {errors.email && (
                      <IonText id="email-error" className="text-wrong text-sm">
                        {errors.email.message}
                      </IonText>
                    )}
                  </div>

                  {/* Username */}
                  <div className="flex flex-col gap-1">
                    <IonItem lines="none" className="rounded-md px-0 bg-transparent">
                      <IonLabel position="stacked" className="sr-only">
                        Username
                      </IonLabel>
                      <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                          <IonInput
                            type="text"
                            placeholder="Username"
                            aria-invalid={!!errors.username}
                            aria-describedby={errors.username ? "username-error" : undefined}
                            value={field.value}
                            onIonInput={(e) => field.onChange(e.detail.value ?? "")}
                            onIonBlur={field.onBlur}
                            className="w-full rounded-md px-4 py-2 bg-primary text-surface-900 placeholder:text-neutral focus:outline-none focus:ring-2 transition"
                          />
                        )}
                      />
                    </IonItem>
                    {errors.username && (
                      <IonText id="username-error" className="text-wrong text-sm">
                        {errors.username.message}
                      </IonText>
                    )}
                  </div>

                  {/* Password */}
                  <div className="relative flex flex-col gap-1">
                    <IonItem lines="none" className="rounded-md px-0 bg-transparent">
                      <IonLabel position="stacked" className="sr-only">
                        Password
                      </IonLabel>
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <IonInput
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            value={field.value}
                            onIonInput={(e) => field.onChange(e.detail.value ?? "")}
                            onIonBlur={field.onBlur}
                            className="w-full rounded-md px-4 py-2 bg-primary text-surface-900 placeholder:text-neutral pr-10 focus:outline-none focus:ring-2 transition"
                          />
                        )}
                      />
                      <button
                        type="button"
                        tabIndex={-1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                      </button>
                    </IonItem>
                    {errors.password && (
                      <IonText id="password-error" className="text-wrong text-sm">
                        {errors.password.message}
                      </IonText>
                    )}
                  </div>

                  {/* Submit (shadcn Button inside Ionic layout) */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !(isDirty && isValid)}
                    className="w-full bg-light text-surface-900 font-rosario font-semibold rounded-md py-2 mt-2 hover:bg-primary-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Signing up..." : "SIGN UP"}
                  </Button>

                  <div className="mt-4 text-sm text-primary text-center">
                    Already have an account? {" "}
                    <IonRouterLink
                      routerLink="/login"
                      className="font-semibold underline hover:text-primary-hover focus:outline-none focus:ring-2 focus:ring-primary-focus rounded"
                    >
                      Sign in
                    </IonRouterLink>
                  </div>
                </form>

                <div className="w-full border-t border-dashed border-surface-700/40 mt-10" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
