import s from './style.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOn, logOff } from '../../store/user/user-slice'

import { auth, usersDB } from '../../config/firebase'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

export function AuthForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let dispatch = useDispatch()

    const signInWithEmailAndPassword = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const docRef = doc(usersDB, 'users', auth?.currentUser?.email)
            let user;
            try {
                user = await getDoc(docRef)
            } catch(err) {
                console.error(err)
            }
            dispatch(logOn(user.data()))
        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(logOff())
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={signInWithEmailAndPassword}>Login</button>
            <br/>
            <button onClick={logout}> Logout </button>
        </div>
    )
}