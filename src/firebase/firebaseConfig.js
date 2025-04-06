import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0RzaoizQPf_Glcs9hspFSVjU0hohhyeE",
    authDomain: "mentora-bd6c0.firebaseapp.com",
    projectId: "mentora-bd6c0",
    storageBucket: "mentora-bd6c0.firebasestorage.app",
    messagingSenderId: "390048828120",
    appId: "1:390048828120:web:478a751975edcb6793a5ad",
    measurementId: "G-CX7ZZ99T96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
