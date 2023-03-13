import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  name: '',
  options: {},
  automaticDataCollectionEnabled: false,
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const database = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseConfig)
