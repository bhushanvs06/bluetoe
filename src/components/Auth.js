import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "./auth.css"; // Import the CSS file

function Auth({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isNewUser, setIsNewUser] = useState(true);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "students", user.uid), {
        name,
        email,
        profilePicture: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        class: "12",
        marks: {},
        attendance: "91",
        sports: "89",
        overallGrowth: "80"
      });

      onLogin(user, true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = doc(db, "students", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        onLogin(user, false);
      } else {
        setError("No user data found. Please register again.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isNewUser ? "Sign Up" : "Login"}</h2>
      {isNewUser && <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />}
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={isNewUser ? handleSignup : handleLogin}>{isNewUser ? "Sign Up" : "Login"}</button>
      <p onClick={() => setIsNewUser(!isNewUser)}>
        {isNewUser ? "Already have an account? " : "New user? "}
        <span>{isNewUser ? "Login" : "Sign Up"}</span>
      </p>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Auth;
