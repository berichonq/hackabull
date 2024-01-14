import "./LoginForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOn } from "../../store/user/user-slice";

import { auth, usersCollectionRef } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
const textColor = {
  color: "#052B56",
  transition: "color 0.3s ease", // Smooth color transition on hover
};
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState("")

  let dispatch = useDispatch();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      ///////////////////////////////////////////////////////////////////////////////
      // Access the logged in user's data from Firestore and update the Redux state
      const docRef = doc(usersCollectionRef, auth?.currentUser?.email);
      let user;
      try {
        user = await getDoc(docRef);
      } catch (err) {
        console.error(err);
      }

      dispatch(logOn(user.data()));
      //////////////////////////////////////////////////////////////////////////////
    } catch (err) {
      console.error(err)
      setCredentialsError("Incorrect email or password. Please try again")
    }
  };

  return (
    <div>
      <div className="form-line">
        <label
          htmlFor="email"
          className="block text-medium font-medium text-gray-900 dark:text-white"
          style={textColor}
        >
          Email
        </label>
        <input
          required
          id="email"
          autoComplete="email"
          placeholder="Email"
          type="email"
          onFocus={() => {
            setCredentialsError("")
          }}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-gray-800 rounded-md p-2 login-input"
        />
      </div>
      <div className="form-line -mb-3">
        <label
          htmlFor="password"
          className="block text-medium font-medium text-gray-900 dark:text-white"
          style={textColor}
        >
          Password
        </label>
        <input
          required
          id="password"
          placeholder="Password"
          type="password"
          onFocus={() => {
            setCredentialsError("")
          }}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white border border-gray-800 rounded-md p-2 login-input"
        />
      </div>
      <Link to="/password-reset" className="linkStyle">
        Forgot password?{" "}
      </Link>
      <br />
      <button onClick={login} className="login-button mt-3">
        Login
      </button>
      {credentialsError && <p className="error-message">{credentialsError}</p>}
      <br />
    </div>
  );
}
