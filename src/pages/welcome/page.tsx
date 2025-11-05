"use client";

import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
} from "@ionic/react";

export default function WelcomePage() {
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

                <div className="w-full border-t border-dashed border-surface-700/40 mt-10" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}