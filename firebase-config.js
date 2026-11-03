// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Henter Firebase-konfigurasjon automatisk fra Firebase Hosting (/__/firebase/init.json)
// slik at ingen apiKey ligger hardkodet i GitHub-repoet.
let app = null;

export async function getFirebaseApp() {
  if (app) return app;
  try {
    const res = await fetch('/__/firebase/init.json');
    if (!res.ok) return null;
    const firebaseConfig = await res.json();
    app = initializeApp(firebaseConfig);
    return app;
  } catch {
    return null;
  }
}
