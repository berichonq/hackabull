import s from './style.module.css'
import { Link } from 'react-router-dom'

export function Register() {

    return (
        <div>
            Welcome to registration
            <br/>
            Already registered? <Link to='/login'>Login here</Link>
        </div>
    )
}