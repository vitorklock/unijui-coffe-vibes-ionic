"use client";

import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
} from "@ionic/react";

export function WelcomePage() {
  return (
    <IonPage>
      <IonContent fullscreen className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-surface-800 to-surface-400 shadow-2xl size-full p-8 flex flex-col items-center">
          {/* Logo */}
          <div className="mb-10 text-center">
            <img
              src="/logo/logo.svg"
              alt="Coffee Vibes Logo"
              className="mx-auto w-32 h-auto"
              draggable={false}
            />
          </div>

          <div className="w-full grow flex-col content-center pb-40">
            {/* Welcome text */}
            <h2 className="text-primary text-3xl font-rosarivo font-bold text-center mb-8">
              Welcome!
            </h2>

            {/* Buttons */}
            <div className="flex flex-col gap-6 w-full">
              <IonRouterLink
                routerLink="/register"
                className="w-full bg-light text-surface-900 font-rosario font-semibold rounded-xl py-3 text-lg text-center hover:bg-primary-hover transition focus:outline-none focus:ring-2 focus:ring-primary-focus"
              >
                CREATE ACCOUNT
              </IonRouterLink>

              <IonRouterLink
                routerLink="/login"
                className="w-full bg-light text-surface-900 font-rosario font-semibold rounded-xl py-3 text-lg text-center hover:bg-primary-hover transition focus:outline-none focus:ring-2 focus:ring-primary-focus"
              >
                LOGIN
              </IonRouterLink>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}