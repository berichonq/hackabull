import "./RegistrationForm.css";
import { schoolNames } from "./schoolsArray";
import { countryCodes } from "./countriesArray"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Select from "react-select"

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

  let ages = [];
  for (let i = 13; i <= 100; i++) {
    ages.push({ value: i, label: i })
  }

  let schools = [];
  for (let i = 0; i < schoolNames.length; i++) {
    schools.push({ value: schoolNames[i], label: schoolNames[i] })
  }
  schools.push({ value: "Other", label: "Other" });

  let countries = [];
  for (let i = 0; i < countryCodes.length; i++) {
    countries.push({ value: countryCodes[i], label: countryCodes[i] })
  }

  // Input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState();
  const [country, setCountry] = useState();
  const [age, setAge] = useState();
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");
  const [levelOfStudy, setLevelOfStudy] = useState();
  const [resume, setResume] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [firstTimeHacker, setFirstTimeHacker] = useState("");
  const [transportationNeeded, setTransportationNeeded] = useState("");
  const [checkbox1, setCheckBox1] = useState(false);
  const [checkbox2, setCheckBox2] = useState(false);
  const [checkbox3, setCheckBox3] = useState(false);


  // Error states
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [countryError, setCountryError] = useState();
  const [ageError, setAgeError] = useState();
  const [gradeError, setGradeError] = useState();
  const [collegeError, setCollegeError] = useState();
  const [levelOfStudyError, setLevelOfStudyError] = useState();
  const [resumeError, setResumeError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  const [roleError, setRoleError] = useState("");
  const [checkbox1Error, setCheckbox1Error] = useState("");
  const [checkbox2Error, setCheckbox2Error] = useState("");

  const [validated, setValidated] = useState();

  const handlePhoneOnChange = (value, countryData) => {
    setPhone('+' + countryData.dialCode + ' ' + value.slice(countryData.dialCode.length))
  }

  const handleFirstTimeHackerOnChange = (e) => {
    if (e.length === 0) {
      setFirstTimeHacker(false);
      setTransportationNeeded(false);
    } else if (e.length === 2) {
      setFirstTimeHacker(true);
      setTransportationNeeded(true);
    } else if (e[0].value === 1) {
      setFirstTimeHacker(true);
      setTransportationNeeded(false);
    } else {
      setFirstTimeHacker(false);
      setTransportationNeeded(true);
    }
  }

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

    if (!country) {
      setCountryError("Please select an option");
      valid = false;
    } else {
      setCountryError("");
    }

    if (!age) {
      setAgeError("Please select an option");
      valid = false;
    } else {
      setAgeError("");
    }

    if (!grade) {
      setGradeError("Please select an option");
      valid = false;
    } else {
      setGradeError("");
    }

    if (!levelOfStudy) {
      setLevelOfStudyError("Please select an option");
      valid = false;
    } else {
      setLevelOfStudyError("");
    }

    if (!college) {
      setCollegeError("Please select an option");
      valid = false;
    } else {
      setCollegeError("");
    }

    if (!role) {
      setRoleError("Please select an option");
      valid = false;
    } else {
      setRoleError("");
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

    if (!checkbox1) {
      setCheckbox1Error("You must agree to the MLH Code of Conduct to proceed");
      valid = false;
    } else {
      setCheckbox1Error("");
    }

    if (!checkbox2) {
      setCheckbox2Error("You must agree to the MLH Terms and Conditions to proceed");
      valid = false;
    } else {
      setCheckbox2Error("");
    }

    return valid;
  };

  // Handles form submission
  const register = async () => {
    if (validForm()) {
      setValidated(true);
      let newUserCreated = false;
      let newDocCreated = false;

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
            phone: phone,
            country_of_residence: country,
            age: age,
            classification: grade,
            university: college,
            level_of_study: levelOfStudy,
            first_time_hacker: firstTimeHacker,
            needs_transportation: transportationNeeded,
            role: role,
            agreed_to_first_checkbox: checkbox1,
            agreed_to_second_checkbox: checkbox2,
            agreed_to_third_checkbox: checkbox3,
          });
          newDocCreated = true;
        } catch (err) {
          console.error(err);
          alert('Oops, something went wrong. Try again later')
          // If doc creation fails, the entire process should fail back. Delete the new user
          await auth?.currentUser?.delete()
        }
      }

      // Upload their resume to the Firebase Cloud Storage bucket
      if (newUserCreated && newDocCreated) {
        const storageRef = ref(storage, "/resumes/" + firstName + "_" + lastName + "_resume.pdf");
        try {
          await uploadBytes(storageRef, resume);
        } catch (err) {
          console.error(err);
        }
      }

      // Send email verification
      if (newUserCreated && newDocCreated) {
        try {
          await sendEmailVerification(auth?.currentUser);
          await signOut(auth);
          navigate("/login");
        } catch (err) {
          console.error(err);
        }
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
          Register for Hackabull 2024!
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
                placeholder="First name"
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
                htmlFor="phone"
                className="block text-medium font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <PhoneInput
                country={'us'}
                preferredCountries={['us']}
                countryCodeEditable={false}
                onChange={handlePhoneOnChange}
              />
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
            htmlFor="country-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Country of Residence
          </label>
          <Select
            required
            placeholder={"Select country"}
            id="country-select"
            onChange={(e) => setCountry(e.value)}
            options={countries}
            isSearchable
          >
          </Select>
          {countryError && <p className="error-message">{countryError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="age-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>
          <Select
            required
            placeholder={"Select age"}
            id="age-select"
            onChange={(e) => setAge(e.value)}
            options={ages}
            isSearchable
          >
            { ages.map((age) => {
              return <option key={age} value={age}>{age}</option>
            }) }
          </Select>
          {ageError && <p className="error-message">{ageError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="grade-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Select the year in college you're in
          </label>
          <Select
            required
            placeholder={"Select grade"}
            id="grade-select"
            onChange={(e) => setGrade(e.value)}
            options={[{value: '1', label: 1}, {value: '2', label: 2}, {value: '3', label: 3}, {value: '4', label: 4}, {value: '5+', label: '5+'}, {value: 'N/A', label: 'N/A'}]}
          >
          </Select>
          {gradeError && <p className="error-message">{gradeError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="college-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Select your school from the list. If it does not appear, select "Other"
          </label>
          <Select
            required
            placeholder={"Select school"}
            id="grade-select"
            onChange={(e) => setCollege(e.value)}
            options={schools}
          >
          </Select>
          {collegeError && <p className="error-message">{collegeError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="level-of-study-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Select your current level of study
          </label>
          <Select
            required
            placeholder={"Select level"}
            id="level-of-study-select"
            onChange={(e) => setLevelOfStudy(e.value)}
            options={[{value: "Less than Secondary/High School", label: "Less than Secondary/High School"},
                      {value: "Secondary/High School", label: "Secondary/High School"},
                      {value: "Undergraduate University (2 year - community college or similar)", label: "Undergraduate University (2 year - community college or similar)"},
                      {value: "Undergraduate University (3+ year)", label: "Undergraduate University (3+ year)"},
                      {value: "Graduate University (Masters, Professional, Docotral, etc.)", label: "Graduate University (Masters, Professional, Docotral, etc.)"},
                      {value: "Code School/Bootcamp", label: "Code School / Bootcamp"},
                      {value: "Other Vocational/Trade Program or Apprenticeship", label: "Other Vocational/Trade Program or Apprenticeship"},
                      {value: "Post Doctorate", label: "Post Doctorate"},
                      {value: "Other", label: "Other"},
                      {value: "I'm not currently a student", label: "I'm not currently a student"},
                      {value: "Prefer not to answer", label: "Prefer not to answer"}
                    ]}
          >
          </Select>
          {levelOfStudyError && <p className="error-message">{levelOfStudyError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="role-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            I would like to register as a...
          </label>
          <Select
            required
            id="role-select"
            placeholder={"Select role"}
            onChange={(e) => setRole(e.value)}
            options={[{value: "participant", label: "Participant"}, {value: "volunteer", label: "Volunteer"}]}
          >
          </Select>
          {roleError && <p className="error-message">{roleError}</p>}
        </div>
        <div className="form-line">
          <label
            htmlFor="first-time-hacker-select"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            Please select all that apply
          </label>
          <Select
            required
            id="first-time-hacker-select"
            placeholder={"Select"}
            isMulti
            options={[{value: 1, label: "This is my first hackathon"}, {value: 2, label: "I require assistance with transportation to the event"}]}
            onChange={(e) => handleFirstTimeHackerOnChange(e)}
          >
          </Select>
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
        <div className="form-line mb-2">
          <label
            htmlFor="disclaimer-1"
            className="block text-medium font-medium text-gray-900 dark:text-white"
          >
            We are currently in the process of partnering with MLH. The following 3 checkboxes are for this partnership. If we do not end up partnering with MLH, your information will not be shared.
          </label>
        </div>
        <div className="form-line mb-2 checkbox-container">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="disclaimer1"
              onChange={(e) => setCheckBox1(e.target.checked)}
              className="m-2"
            />
            <label
              htmlFor="disclaimer1"
              className="block text-medium font-medium text-gray-900 dark:text-white"
            >
              I have read and agree to the <a href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"} className="mlh-link">MLH Code of Conduct</a>.
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="disclaimer2"
              onChange={(e) => setCheckBox2(e.target.checked)}
              className="m-2"
            />
            <label
              htmlFor="disclaimer2"
              className="block text-medium font-medium text-gray-900 dark:text-white"
            >
              I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the
              <a href={"https://mlh.io/privacy"} className="mlh-link"> MLH Privacy Policy</a>. I further agree to the terms of both the <a href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md" className="mlh-link">MLH Contest Terms and Conditions</a> and the
              <a href={"https://mlh.io/privacy"} className="mlh-link"> MLH Privacy Policy</a>.
            </label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="disclaimer3"
              onChange={(e) => setCheckBox3(e.target.checked)}
              className="m-2"
            />
            <label
              htmlFor="disclaimer3"
              className="block text-medium font-medium text-gray-900 dark:text-white"
            >
              I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.
            </label>
          </div>
          {checkbox1Error && <p className="error-message">{checkbox1Error}</p>}
          {checkbox2Error && <p className="error-message">{checkbox2Error}</p>}
        </div>
        
        <button className="login-button" id="submit" onClick={register}>
          Register
        </button>
        <p className="pt-2 pb-2 already-register text-left">Already registered? <Link to="/login" className="linkStyle">Login here</Link></p>
      </div>
    </div>
  );
}
