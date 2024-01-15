import "./style.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOn } from "../../store/user/user-slice";

import { auth, usersCollectionRef } from "../../config/firebase";

import { doc, setDoc, getDoc } from "firebase/firestore";

export function EditProfile() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  // Input field states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");

  // Error states
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [gradeError, setGradeError] = useState();
  const [collegeError, setCollegeError] = useState();

  const [validated, setValidated] = useState();

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

    return valid;
  };

  const submitChanges = async () => {
    if (validForm()) {
      setValidated(true);
      let docUpdated = false;

      // We're validated, now update their Firebase doc
      try {
        await setDoc(doc(usersCollectionRef, auth?.currentUser?.email), {
          first: firstName,
          last: lastName,
          university: college,
          classification: grade,
        });
        docUpdated = true;
      } catch (err) {
        console.error(err);
      }

      // We also need to update the redux store
      if (docUpdated) {
        let docRef = doc(usersCollectionRef, auth?.currentUser?.email);
        let user;
        try {
          user = await getDoc(docRef);
        } catch (err) {
          console.error(err);
        }
        dispatch(logOn(user.data()));
      }

      // Return to profile
      navigate("/profile");
    } else {
      setValidated(false); // This state change will trigger a re-render with any error messages
    }
  };

  const returnToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="h-screen century-ps text-xl text-left">
      <div className="row">
        <div className="pl-5 ml-5 col-lg">
          <p className="title text-2xl" id="title">
            Edit your profile
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
              placeholder="Doe"
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
              placeholder="Harvard University"
              onChange={(e) => setCollege(e.target.value)}
            />
            {collegeError && <p>{collegeError}</p>}
          </div>
          <button id="cancel" onClick={returnToProfile}>
            Cancel
          </button>
          &nbsp; &nbsp;
          <button id="submit" onClick={submitChanges}>
            Submit changes
          </button>          
        </div>
      </div>
    </div>
  );
}
