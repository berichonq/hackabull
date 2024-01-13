import "./RegistrationForm.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, usersCollectionRef } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import loginImage from "../../assets/images/login-page.png";

export function RegistrationForm() {
  let navigate = useNavigate();

  // Input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [gradeError, setGradeError] = useState();
  const [collegeError, setCollegeError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const [validated, setValidated] = useState();

  // Returns -1 if incorrectly formatted, 0 if email in use, 1 if valid
  const validEmail = () => {
    let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(validRegex)) {
      return true;
    }
    return false;
  };

  const validPassword = () => {
    let validRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[-_!@#$%^&*a-zA-Z\d]{8,20}$/;
    if (password.match(validRegex)) {
      return true;
    }
    return false;
  };

  const validForm = () => {
    let valid = true;
    if (!firstName) {
      setFirstNameError("Cannot leave this field empty");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName) {
      setLastNameError("Cannot leave this field empty");
      valid = false;
    } else {
      setLastNameError("");
    }

    if (!grade) {
      setGradeError("Please select an option");
      valid = false;
    } else if (grade !== "N/A") {
      setGradeError("");
      if (college.length < 12) {
        setCollegeError("University must have at least 12 characters");
        valid = false;
      } else {
        setCollegeError("");
      }
    } else {
      setGradeError("");
    }

    if (!validEmail()) {
      setEmailError("Invalid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validPassword()) {
      setPasswordError(
        "Password must have 8-16 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character in [!@#$%^&*-_]"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    return valid;
  };

  const register = async () => {
    if (validForm()) {
      setValidated(true);
      let newUserCreated = false;

      // We're validated, now create a new user in our Firebase Auth Directory
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth?.currentUser, { displayName: firstName });
        newUserCreated = true;
      } catch (err) {
        alert(err); // Later, can we find a more elegant way to notify the user. Perhaps tell them they're already registered
      }

      // We also need to give them their own doc in the Firestore DB, this represents their registration
      if (newUserCreated) {
        try {
          await setDoc(doc(usersCollectionRef, auth?.currentUser?.email), {
            first: firstName,
            last: lastName,
            university: college ? grade !== "N/A" : "",
            classification: grade,
          });
        } catch (err) {
          console.error(err);
        }
      }

      // Send email verification
      try {
        let user = auth?.currentUser;
        await signOut(auth);
        await sendEmailVerification(user);
      } catch (err) {
        console.error(err);
      }
      navigate("/login");
    } else {
      setValidated(false); // This state change will trigger a re-render with any error messages
    }
  };
//
  return (
    <div className="h-screen century-ps text-xl text-left">
      <div className="row">
        <div className="pl-5 ml-5 col-lg">
          <p className="title text-2xl bold-century" id="title">
            Welcome to Hackabull 2024 at USF!
          </p>
          <div className="form-line">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              required
              id="first-name"
              autoComplete="given-name"
              placeholder="John"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError && <p>{firstNameError}</p>}
          </div>
          <div className="form-line">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900 dark:text-white">
              Last Name
            </label>
            <input
              required
              id="last-name"
              autoComplete="family-name"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError && <p>{lastNameError}</p>}
          </div>
          <div className="form-line">
            <label htmlFor="grade-select">
              If applicable, what year in college are you?{" "}
            </label>
            <select
              required
              id="grade-select"
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
              <option value="N/A">N/A</option>
            </select>
            {gradeError && <p>{gradeError}</p>}
          </div>
          <div className="form-line">
          <label htmlFor="college-input">
            Please include the full name of your education institution{" "}
          </label>
          <input
            id="college-input"
            disabled={true ? grade === "N/A" : false}
            placeholder="University"
            onChange={(e) => setCollege(e.target.value)}
          />
          {collegeError && <p>{collegeError}</p>}
          </div>
          <div className="form-line">
          <input
            required
            id="email"
            autoComplete="email"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p>{emailError}</p>}
          </div>
          <div className="form-line">
          <input
            required
            id="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p>{passwordError}</p>}
          </div>
          <div className="form-line">
          <input
            required
            id="password-confirmation"
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p>{confirmPasswordError}</p>}
          </div>
          <button id="submit" onClick={register}>
            Register
          </button>
          <br />
          <br />
          Already registered? <Link to="/login">Login here</Link>
        </div>

        <div className="col-lg-4">
          <img className="login-img" src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
}
