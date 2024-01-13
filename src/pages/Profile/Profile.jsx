import s from './style.module.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { logOff } from '../../store/user/user-slice';

import { auth, usersCollectionRef } from '../../config/firebase';
import { signOut, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';

export function Profile() {    
    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [deleteButtonClicked, setDeleteButtonClicked] = useState(false)
    const [accountDeletionConfirmation, setAccountDeletionConfirmation] = useState()
    const [passwordField, setPasswordField] = useState()
    const [reauthenticated, setReauthenticated] = useState(false)

    const forcePageReload = () => {
        setTimeout(() => {
            window.location.reload();
        }, 300000)
    }

    let key = 0

    const studentInfo = () => {
        let info = []
        info.push(user.first + ' ' + user.last)
        info.push(auth?.currentUser?.email)
        
        switch (user.classification) {
            case "1":
                info.push("Freshman at " + user.university)                        
                break;
            case "2":
                info.push("Sophomore at " + user.university)
                break;
            case "3":
                info.push("Junior at " + user.university)
                break
            case "4":
                info.push("Senior at " + user.university)
                break;
            case "5+":
                info.push("Super Senior at " + user.university)
                break;
            default:
                info.push("No college enrollment")
                break;
        }

        return info;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(logOff())
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////

    const reauthenticate = async () => {
        let authCredential = EmailAuthProvider.credential(auth?.currentUser?.email, passwordField)
        let flagged = true
        try {
            await reauthenticateWithCredential(auth?.currentUser, authCredential)
            forcePageReload()
            flagged = false
        } catch(err) {
            console.error(err)
        }

        if (flagged) {
            setReauthenticated(false)
            setDeleteButtonClicked(false)
            navigate('/profile')
            alert('Incorrect credential')
        } else {
            setReauthenticated(true)
        }
    }
    
    const deleteAccount = async () => {
        let flagged = false

        // Delete their Firestore document
        if (!flagged) {
            try {
                await deleteDoc(doc(usersCollectionRef, auth?.currentUser?.email))
            } catch(err) {
                console.error(err)
                flagged = true
            }
        }        

        // Delete their Firebase auth identity
        if (!flagged) {
            try {
                await auth?.currentUser?.delete()
            } catch(err) {
                alert(err)
                flagged = true
            }
        }
        

        // Update the redux store and navigate back to home
        dispatch(logOff())
        navigate('/')
    }

    const cancelAccountDeletion = () => {
        setDeleteButtonClicked(false);
        setReauthenticated(false)
    }

    return (
        <div>
            Welcome to your profile, { user.first }
            <br/><br/>
            Your registration information
            <br/>
            { studentInfo().map((datapoint) => (
                <div key={key++}>
                    <p>{ datapoint }</p>
                    <br/>
                </div>
            )) }
            <br/>
            <Link to='/profile/edit'>Edit my profile</Link>
            <br/><br/>
            <Link to='/password-reset'>Change my password</Link>
            <br/><br/>
            { !deleteButtonClicked && <button onClick={setDeleteButtonClicked}> Delete my account </button> }
            { deleteButtonClicked && !reauthenticated && <>
                <p>Please re-enter your password</p>
                <input required onChange={(e) => setPasswordField(e.target.value)}></input>
                <br/>
                <button onClick={reauthenticate}> Authenticate </button>

            </> }




            { reauthenticated && <>
                <p>{`Are you sure you want to delete your account? This action is irreversible. To confirm, type "${auth?.currentUser?.email}" in the box below`}</p>
                <input required onChange={(e) => setAccountDeletionConfirmation(e.target.value)}></input>
                <br/>
                <button onClick={deleteAccount} disabled={true ? accountDeletionConfirmation !== auth?.currentUser?.email : false}> Delete my account </button>
                <br/>
                <button onClick={cancelAccountDeletion}> Cancel </button>
            </> }
            <br/><br/>
            <button onClick={logout}> Logout </button>
            <br/><br/>

        </div>
    )
}