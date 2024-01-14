import "./RegistrationForm.css";
import loginImage from "../../assets/images/login-page.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, storage, usersCollectionRef } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export function RegistrationForm() {
  let navigate = useNavigate();

  // Input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");
  const [resume, setResume] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error states
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [gradeError, setGradeError] = useState();
  const [collegeError, setCollegeError] = useState();
  const [resumeError, setResumeError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const [validated, setValidated] = useState();

  // Validate the resume file
  // Returns -1 if no file is chosen, 0 if the file chosen is too large,
  const validateResume = () => {
    if (!resume) {
      return "You must upload a resume. Accepted file format: .pdf | Maximum file size: 500 KB";
    }

    // Limit the file type to only allow PDFs
    if (resume.type !== "application/pdf") {
      return "Upload must be a PDF";
      // Limit the file size to 500 KB == 512000 bytes
    } else if (resume.size >= 512000) {
      return "Upload must be less than 500 KB";
    } else {
      return "";
    }
  };

  // Validate the email field
  // Returns -1 if incorrectly formatted, 0 if email in use, 1 if valid
  const validateEmail = () => {
    let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(validRegex)) {
      return "Invalid email format";
    }
    return "";
  };

  // Validate the password field
  const validatePassword = () => {
    let validRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[-_!@#$%^&*a-zA-Z\d]{8,20}$/;
    if (!password.match(validRegex)) {
      return "Password must have 8-16 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character in [!@#$%^&*-_]";
    } else {
      return "";
    }
  };

  // Validate the form
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
      setCollege("");
    }

    let errorMessage = validateResume();
    if (errorMessage) {
      valid = false;
    }
    setResumeError(errorMessage);

    errorMessage = validateEmail();
    if (errorMessage) {
      valid = false;
    }
    setEmailError(errorMessage);

    errorMessage = validatePassword();
    if (errorMessage) {
      valid = false;
    }
    setPasswordError(errorMessage);

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    return valid;
  };

  // Handles form submission
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
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          setEmailError("This email has already been registered");
        }
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

      // Upload their resume to the Firebase Cloud Storage bucket
      const storageRef = ref(
        storage,
        "/resumes/" + firstName + "_" + lastName + "_resume.pdf"
      );
      try {
        await uploadBytes(storageRef, resume);
      } catch (err) {
        console.error(err);
      }

      // Send email verification
      if (newUserCreated) {
        try {
          let user = auth?.currentUser;
          await signOut(auth);
          await sendEmailVerification(user);
        } catch (err) {
          console.error(err);
        }
        navigate("/login");
      }
    } else {
      setValidated(false); // This state change will trigger a re-render with any error messages
    }
  };

  return (
    <div className="register-container century-ps text-xl text-left">
      <div className="center-h">
        <br />
        <p className="title text-2xl bold-century title-center" id="title">
          Register to Hackabull 2024
        </p>
        <br />
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-line">
              <label
                htmlFor="first-name"
                className="block text-medium font-medium text-gray-900 dark:text-white "
              >
                First Name
              </label>
              <input
                required
                id="first-name"
                autoComplete="given-name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              />
              {firstNameError && <p className="error-message">{firstNameError}</p>}
            </div>
            <div className="form-line">
              <label
                htmlFor="last-name"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                required
                id="last-name"
                autoComplete="family-name"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              />
              {lastNameError && <p className="error-message">{lastNameError}</p>}
            </div>
            <div className="form-line">
              <label
                htmlFor="grade-select"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                What college year are you in?{" "}
              </label>
              <select
                required
                id="grade-select"
                onChange={(e) => setGrade(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
                <option value="N/A">N/A</option>
              </select>
              {gradeError && <p className="error-message">{gradeError}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-line">
              <label
                htmlFor="email"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                required
                id="email"
                autoComplete="email"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="form-line">
              <label
                htmlFor="password"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                required
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
            </div>
            <div className="form-line">
              <label
                htmlFor="password-confirmation"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                required
                id="password-confirmation"
                placeholder="Confirm password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
              />
              {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
            </div>
          </div>
        </div>
        <div className="form-line">
          <label
            htmlFor="college-input"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Please include the full name of your education institution{" "}
          </label>
          <input
            id="college-input"
            disabled={true ? grade === "N/A" : false}
            placeholder="University"
            onChange={(e) => setCollege(e.target.value)}
            className="bg-white border border-gray-800 rounded-md p-2 login-input"
          />
          {collegeError && <p className="error-message">{collegeError}</p>}
        </div>
        <div className="form-line mb-2">
          <label
            htmlFor="resume"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Please upload your resume (File Format: pdf, Max: 500 KB)
          </label>
          <input
            type="file"
            id="file-input"
            accept=".pdf"
            onChange={(e) => setResume(e.target.files[0])}
          />
          {resumeError && <p className="error-message">{resumeError}</p>}
        </div>
        
        <button className="login-button" id="submit" onClick={register}>
          Register
        </button>
        <p className="pt-2 pb-2 already-register text-right">Already registered? <Link to="/login" className="linkStyle">Login here</Link></p>
      </div>
    </div>
  );
}
