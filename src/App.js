import { useEffect, useState } from "react";
import { hide, show } from "./assets";

import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [strength, setStrength] = useState(null);

  useEffect(() => {
    if (enteredPassword.length === 0) {
      setStrength(null);
    }
    if (enteredPassword.length >= 1 && enteredPassword.length < 8) {
      setStrength("vulnerable");
    }
    if (enteredPassword.length >= 8 && /\d/.test(enteredPassword)) {
      setStrength("moderate");
    }
    if (
      enteredPassword.length >= 8 &&
      /\d/.test(enteredPassword) &&
      /[A-Z]/.test(enteredPassword)
    ) {
      setStrength("robust");
    }
    if (
      enteredPassword.length >= 8 &&
      /\d/.test(enteredPassword) &&
      /[A-Z]/.test(enteredPassword) &&
      /[^a-zA-Z0-9]/.test(enteredPassword)
    ) {
      setStrength("secure");
    }
  }, [enteredPassword, enteredPassword.length]);

  return (
    <div className="pwd-container">
      <label for="password">Password</label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          className="password-input"
          id="password"
          onChange={(e) => setEnteredPassword(e.target.value)}
        />
        <img
          src={showPassword ? show : hide}
          alt={
            showPassword
              ? "Emoji of a monkey opening his eyes"
              : "Emoji of a monkey closing his eyes"
          }
          className="emoji"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <div className="score">
        <span
          style={{
            borderTop:
              strength === "vulnerable"
                ? "3px solid red"
                : strength === "moderate"
                ? "3px solid orange"
                : strength === "robust"
                ? "3px solid blue"
                : strength === "secure"
                ? "3px solid green"
                : "3px solid gray",
            color:
              strength === "vulnerable"
                ? "red"
                : strength === "moderate"
                ? "orange"
                : strength === "robust"
                ? "blue"
                : strength === "secure"
                ? "green"
                : "gray",
          }}
        >
          Vulnerable
        </span>
        <span
          style={{
            borderTop:
              strength === "moderate"
                ? "3px solid orange"
                : strength === "robust"
                ? "3px solid blue"
                : strength === "secure"
                ? "3px solid green"
                : "3px solid gray",
            color:
              strength === "moderate"
                ? "orange"
                : strength === "robust"
                ? "blue"
                : strength === "secure"
                ? "green"
                : "gray",
          }}
        >
          Moderate
        </span>
        <span
          style={{
            borderTop:
              strength === "robust"
                ? "3px solid blue"
                : strength === "secure"
                ? "3px solid green"
                : "3px solid gray",
            color:
              strength === "robust"
                ? "blue"
                : strength === "secure"
                ? "green"
                : "gray",
          }}
        >
          Robust
        </span>
        <span
          style={{
            borderTop:
              strength === "secure" ? "3px solid green" : "3px solid gray",
            color: strength === "secure" ? "green" : "gray",
          }}
        >
          Secure
        </span>
      </div>
    </div>
  );
}

export default App;
