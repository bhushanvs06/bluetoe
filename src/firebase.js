import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFvBnY6DVY-Ay914rn6iZwfBbefwBT4is",
  authDomain: "mentora-a3bb2.firebaseapp.com",
  projectId: "mentora-a3bb2",
  storageBucket: "mentora-a3bb2.firebasestorage.app",
  messagingSenderId: "449265366548",
  appId: "1:449265366548:web:0f51f7537c70ea7505d901",
  measurementId: "G-RCRFNQTWN4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
