import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonIcon,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./Login.css";

const DEFAULT_USER = {
  username: "admin",
  password: "123456",
};

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === DEFAULT_USER.username &&
      password === DEFAULT_USER.password
    ) {
      history.push("/coffes");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="login-background ion-padding"
      >
        <div className="login-container">
          <img
            src="/assets/logo/logo.svg"
            alt="Coffee Vibes Logo"
            className="login-logo"
            draggable={false}
          />

          <form onSubmit={handleLogin} className="login-form">
            <IonLabel className="login-label">Login</IonLabel>

            <IonItem className="login-input">
              <IonInput
                type="text"
                placeholder="Username"
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
                required
              />
            </IonItem>

            <IonItem className="login-input password-input">
              <IonInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                required
              />
              <IonIcon
                icon={showPassword ? eyeOff : eye}
                slot="end"
                className="password-toggle"
                onClick={() => setShowPassword((v) => !v)}
              />
            </IonItem>

            {error && (
              <IonText color="danger" className="login-error">
                {error}
              </IonText>
            )}

            <IonButton
              expand="block"
              type="submit"
              className="login-button"
            >
              LOGIN
            </IonButton>

            <IonButton
              fill="clear"
              size="small"
              className="forgot-button"
            >
              Forgot your password
            </IonButton>

            <p className="create-account">
              Don’t have an account?{" "}
              <a href="/register" className="create-link">
                Create account
              </a>
            </p>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
