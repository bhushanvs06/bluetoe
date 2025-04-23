import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFvBnY6DVY-Ay914rn6iZwfBbefwBT4is",
  authDomain: "mentora-a3bb2.firebaseapp.com",
  projectId: "mentora-a3bb2",
  storageBucket: "mentora-a3bb2.firebasestorage.app",
  messagingSenderId: "449265366548",
  appId: "1:449265366548:web:0f51f7537c70ea7505d901",
  measurementId: "G-RCRFNQTWN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
