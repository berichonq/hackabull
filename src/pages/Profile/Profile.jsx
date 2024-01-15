import "./Profile.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profilePicture from "../../assets/images/profile-pic.png";
import { useDispatch, useSelector } from "react-redux";
import { logOff } from "../../store/user/user-slice";

import { auth, usersCollectionRef } from "../../config/firebase";
import {
  signOut,
  reauthenticateWithCredential,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

export function Profile() {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [accountDeletionConfirmation, setAccountDeletionConfirmation] =
    useState();
  const [passwordField, setPasswordField] = useState();
  const [reauthenticated, setReauthenticated] = useState(false);

  const email = auth?.currentUser?.email;
  const firstName = user.first;

  const forcePageReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 300000);
  };

  let key = 0;

  const studentInfo = () => {
    let info = [];
    // info.push(user.first + " " + user.last);
    info.push(auth?.currentUser?.email);

    switch (user.classification) {
      case "1":
        info.push("Freshman at " + user.university);
        break;
      case "2":
        info.push("Sophomore at " + user.university);
        break;
      case "3":
        info.push("Junior at " + user.university);
        break;
      case "4":
        info.push("Senior at " + user.university);
        break;
      case "5+":
        info.push("Super Senior at " + user.university);
        break;
      default:
        info.push("No college enrollment");
        break;
    }

    return info;
  };

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(logOff());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////

  const reauthenticate = async () => {
    let authCredential = EmailAuthProvider.credential(
      auth?.currentUser?.email,
      passwordField
    );
    let flagged = true;
    try {
      await reauthenticateWithCredential(auth?.currentUser, authCredential);
      forcePageReload();
      flagged = false;
    } catch (err) {
      console.error(err);
    }

    if (flagged) {
      setReauthenticated(false);
      setDeleteButtonClicked(false);
      navigate("/profile");
      alert("Incorrect credential");
    } else {
      setReauthenticated(true);
    }
  };

  const cancelAccountDeletion = () => {
    setPasswordField("");
    setAccountDeletionConfirmation("");
    setDeleteButtonClicked(false);
    setReauthenticated(false);
  };

  const deleteAccount = async () => {
    let docDeleted = false;
    let userDeleted = false;

    // Delete their Firestore document
    try {
      await deleteDoc(doc(usersCollectionRef, auth?.currentUser?.email));
      docDeleted = true;
    } catch (err) {
      console.error(err);
      alert("Oops, something went wrong. Try again later");
    }

    // Delete their Firebase auth identity
    if (docDeleted) {
      try {
        await auth?.currentUser?.delete();
        userDeleted = true;
      } catch (err) {
        console.error(err);
        alert("Oops, something went wrong. Try again later");
        // If user deletion fails, we must restore their document
        await setDoc(doc(usersCollectionRef, auth?.currentUser?.email), {
          first: user.first,
          last: user.last,
          university: user.university,
          classification: user.classification,
        });
      }
    }

    // Update the redux store and navigate back to home
    if (docDeleted && userDeleted) {
      dispatch(logOff());
      navigate("/");
      // If something failed along the way, a message has already been displayed and now return to profile
    } else {
      cancelAccountDeletion();
    }
  };

  return (
    <div className="container-fluid century-ps text-xl text-left register-container">
      <div className="pt-5 row center-h">
        {/* First Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
          <div>
            <img
              className="circle-picture"
              src={profilePicture}
              alt="Hacker's Profile Picture"
            />
          </div>
        </div>
        {/* Second Column */}
        <div className="col-lg-6 col-md-6 col-sm-12 blue-color">
          <div className="title text-4xl bold-century">
            {user.first} {user.last}
          </div>
          <div className="text-base">
            {studentInfo().map((datapoint) => (
              <div key={key++}>
                <p>{datapoint}</p>
              </div>
            ))}
          </div>
          <div>
            <button className="login-button2 mt-2">
              <Link to="/profile/edit">Edit my profile</Link>
            </button>
          </div>
          <div>
            <button className="login-button2 mt-2">
              <Link to="/password-reset">Change my password</Link>
            </button>
          </div>
          <button className="login-button2 mt-2" onClick={logout}>
            {" "}
            Logout{" "}
          </button>
          {!deleteButtonClicked && (
            <button
              className="login-button2-red mt-2"
              onClick={setDeleteButtonClicked}
            >
              {" "}
              Delete my account{" "}
            </button>
          )}
          {deleteButtonClicked && !reauthenticated && (
            <>
              <p>Please re-enter your password</p>
              <input
                required
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
                onChange={(e) => setPasswordField(e.target.value)}
              ></input>
              <br />
              <button className="login-button2 mt-2" onClick={reauthenticate}>
                {" "}
                Authenticate{" "}
              </button>
            </>
          )}
          {reauthenticated && (
            <>
              <p>{`Are you sure you want to delete your account? This action is irreversible. To confirm, type "${auth?.currentUser?.email}" in the box below`}</p>
              <input
                required
                className="bg-white border border-gray-800 rounded-md p-2 login-input"
                onChange={(e) => setAccountDeletionConfirmation(e.target.value)}
              ></input>
              <br />
              <button
                onClick={deleteAccount}
                className="login-button2-red mt-2"
                disabled={
                  true
                    ? accountDeletionConfirmation !== auth?.currentUser?.email
                    : false
                }
              >
                {" "}
                Delete my account{" "}
              </button>
              <button
                className="login-button2 mt-2"
                onClick={cancelAccountDeletion}
              >
                {" "}
                Cancel{" "}
              </button>
            </>
          )}

          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
