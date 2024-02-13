import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../firebase";
import SignUpForm from "./SignUpForm"; // Import the SignUpForm component
import "../Styles/main.css";

const auth = getAuth(firebaseApp);

function SignInForm() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false); // State to manage whether to show the sign-up form

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Successful sign-in logic
      // ...

    } catch (error) {
      console.error("Error during sign-in: ", error);

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        // Handle user not found or wrong password
      }

      // Handle other errors
    }
  };

  return (
    <div className="centered-form">
      {showSignUp ? (
        <SignUpForm /> // Render the SignUpForm component if showSignUp is true
      ) : (
        <div className="form-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <form onSubmit={handleSignInSubmit} style={{ width: "400px", padding: "20px", backgroundColor: "white", borderRadius: "10px", marginBottom: "120px" }}>
            <h1><p style={{ marginBottom: "20px", marginLeft: "130px", color:"#29335c" }}>Sign in</p></h1>
            <div className="form-group">
              <input
                type="email"
                id="email" 
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" style={{ backgroundColor: "#29335c", color: "white", marginTop: "10px" }}>Log In</button>
            <p style={{ marginTop: "20px", marginLeft: "60px" }}>
              Don't have an account?{" "}
              <a href="#!" onClick={() => setShowSignUp(true)}>Create One</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignInForm;
