// Kobler React-appen til Firebase
// db brukes til database, auth brukes til innlogging

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApKnvjqT6YwJwRO15mHAngO9UR3s9hccQ",
  authDomain: "bytte-nettside-b9c2c.firebaseapp.com",
  projectId: "bytte-nettside-b9c2c",
  storageBucket: "bytte-nettside-b9c2c.firebasestorage.app",
  messagingSenderId: "598956924182",
  appId: "1:598956924182:web:274b6ef42f005be55d8437",
  measurementId: "G-88GP02DGBW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);