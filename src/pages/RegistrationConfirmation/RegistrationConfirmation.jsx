import s from './style.module.css'
import { Link } from 'react-router-dom'

export function RegistrationConfirmation() {

    return (
        <div>
            You have registered!
            <br/>
            <Link to='/'>Back to home</Link>

        </div>
    )
}