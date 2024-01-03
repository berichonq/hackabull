import s from './style.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { logOn } from '../../store/user/user-slice'

import { auth, usersDB, usersCollectionRef } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore' // See later

export function RegistrationForm() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    // Input field states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [grade, setGrade] = useState("")
    const [college, setCollege] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // Error states
    const [firstNameError, setFirstNameError] = useState()
    const [lastNameError, setLastNameError] = useState()
    const [gradeError, setGradeError] = useState()
    const [collegeError, setCollegeError] = useState()
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [confirmPasswordError, setConfirmPasswordError] = useState()

    const [validated, setValidated] = useState()


    const validEmail = () => {
        let validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email.match(validRegex)) {
            return true
        }
        return false
    }

    const validPassword = () => {
        let validRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!@#$%^&*])[-_!@#$%^&*a-zA-Z\d]{8,20}$/
        if (password.match(validRegex)) {
            return true
        }
        return false
    }

    const validForm = () => {
        let valid = true
        if (!firstName) {
            setFirstNameError("Cannot leave this field empty")
            valid = false
        } else {
            setFirstNameError("")
        }

        if (!lastName) {
            setLastNameError("Cannot leave this field empty")
            valid = false
        } else {
            setLastNameError("")
        }

        if (!grade) {
            setGradeError("Please select an option")
            valid = false
        } else if (grade !== "N/A") {
            setGradeError("")
            if (college.length < 12) {
                setCollegeError("University must have at least 12 characters")
                valid = false
            } else {
                setCollegeError("")
            }
        } else {
            setGradeError("")
        }


        if (!validEmail()) {
            setEmailError("Invalid email")
            valid = false
        } else {
            setEmailError("")
        }

        if (!validPassword()) {
            setPasswordError("Password must have 8-16 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character in [!@#$%^&*-_]")
            valid = false
        } else {
            setPasswordError("")
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords don't match")
            valid = false
        } else {
            setConfirmPasswordError("")
        }
        
        return valid
    }

    const register = async () => {
        if (validForm()) {
            setValidated(true)
            let newUserCreated = false

            // We're validated, now create a new user in our Firebase Auth Directory
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("New account created!")
                newUserCreated = true
            } catch(err) {
                alert(err) // Later, can we find a more elegant way to notify the user. Perhaps tell them they're already registered
            }

            // We also need to give them their own doc in the Firestore DB, this represents their registration
            if (newUserCreated) {
                try {
                    await setDoc(doc(usersCollectionRef, auth?.currentUser?.email), {
                        first: firstName,
                        last: lastName,
                        university: college,
                        classification: grade,
                    })

                    alert("Registration complete!")
                } catch (err) {
                    console.error(err)
                }

                ///////////////////////////////////////////////////////////////////////////////
                // Account creation and registration complete, they should now have data we can access to update our Redux store
                const docRef = doc(usersDB, 'users', auth?.currentUser?.email)
                let user;
                try {
                    user = await getDoc(docRef)
                } catch(err) {
                    console.error(err)
                }

                dispatch(logOn(user.data()))
                //////////////////////////////////////////////////////////////////////////////

                navigate('/')
            }
        } else {
            setValidated(false) // This state change will trigger a re-render with any error messages
        }
    }

    return (
        <div>

            <input required id="first-name" autoComplete="given-name" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
            { firstNameError && <p>{firstNameError}</p>}
            <br/>

            <input required id="last-name" autoComplete="family-name" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
            { lastNameError && <p>{lastNameError}</p>}
            <br/>
            
            <label htmlFor="grade-select">If applicable, what year in college are you? </label>
            <select required id="grade-select" onChange={(e) => setGrade(e.target.value)}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
                <option value="N/A">N/A</option>
            </select>
            { gradeError && <p>{gradeError}</p>}
            <br/>

            <label htmlFor="college-input">Please include the full name of your education institution </label>
            <input id="college-input" disabled={true ? grade === "N/A" : false} placeholder="University" onChange={(e) => setCollege(e.target.value)}/>
            { collegeError && <p>{collegeError}</p>}
            <br/>

            <input required id="email" autoComplete="email" placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            { emailError && <p>{emailError}</p>}
            <br/>

            <input required id="password" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            { passwordError && <p>{passwordError}</p>}
            <br/>

            <input required id="password-confirmation" placeholder="Confirm password" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            { confirmPasswordError && <p>{confirmPasswordError}</p>}
            <br/>

            <button id="submit" onClick={register}>Register</button>

            <br/><br/>

            Already registered? <Link to='/login'>Login here</Link>
        </div>
    )
}