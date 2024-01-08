import s from './style.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOn } from '../../store/user/user-slice'

import { auth, usersDB } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'


export function AuthForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let dispatch = useDispatch()

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            
            ///////////////////////////////////////////////////////////////////////////////
            // Access the logged in user's data from Firestore and update the Redux state
            const docRef = doc(usersDB, 'users', auth?.currentUser?.email)
            let user;
            try {
                user = await getDoc(docRef)
            } catch(err) {
                console.error(err)
            }

            dispatch(logOn(user.data()))
            //////////////////////////////////////////////////////////////////////////////
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <input placeholder="Email" id="email" autoComplete="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button onClick={login}>Login</button>
            <br/>
        </div>
    )
}