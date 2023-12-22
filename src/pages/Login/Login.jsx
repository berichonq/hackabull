import { AuthForm } from '../../components/AuthForm/AuthForm'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export function Login() {
    
    return (
        <div>
        Welcome to login
        <br/>
        <AuthForm />
        Haven't registered yet? <Link to='/register'>Register here</Link>
        </div>
    )
}