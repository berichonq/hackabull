import s from "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export function PasswordResetForm() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("A link to reset your password was sent to your email");
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container century-ps text-xl text-left">
      <div className="center-h">
        <br />
        <p className="title text-2xl bold-century title-center" id="title">
          Change your Password
        </p>
        <br />
        <p className="title-center">
          A link will be sent to your email with further steps
        </p>
        <label
          htmlFor="email"
          className="block text-medium font-medium text-gray-900 dark:text-white "
        >
          Email
        </label>
        <input
          placeholder="Email"
          id="email"
          autoComplete="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-gray-800 rounded-md p-2 login-input"
        />
        <br />
        <button className="login-button mt-2" onClick={resetPassword}>Reset Password</button>
      </div>
    </div>
  );
}
