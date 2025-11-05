import React from 'react';
import { IonPage, IonContent, IonButton, useIonRouter } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const router = useIonRouter(); // Hook pra navegar

  return (
    <IonPage>
      <IonContent className="welcome-bg" fullscreen>
        <div className="welcome-card">
          <h1 className="logo">
            Coffee <br />
            <span>Vibes</span>
          </h1>

          <h2 className="welcome-title">Welcome!</h2>

          <div className="btn-container">
            <IonButton
              expand="block"
              className="btn-primary"
              onClick={() => router.push('/tab2', 'forward', 'push')}
            >
              CREATE ACCOUNT
            </IonButton>

            <IonButton
              expand="block"
              className="btn-secondary"
              fill="outline"
              onClick={() => router.push('/tab3', 'forward', 'push')}
            >
              LOGIN
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;