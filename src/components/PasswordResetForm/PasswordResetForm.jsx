import s from "./style.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { auth } from "../../config/firebase"
import { sendPasswordResetEmail } from 'firebase/auth'

export function PasswordResetForm() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()


    const resetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            alert("A link to reset your password was sent to your email")
            navigate('/login')
        } catch(err) {
            console.error(err)
        }
    }


    return (
        <div>
            <br/>

            <p>A link will be sent to your email with further steps</p>

            <input placeholder="Email" id="email" autoComplete="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}