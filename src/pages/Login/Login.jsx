import s from './style.module.css'
import { Link } from 'react-router-dom'

import { LoginForm} from '../../components/LoginForm/LoginForm'

export function Login() {
    
    return (
        <div>
            Welcome to login
            <br/>
            <LoginForm />
            Haven't registered yet? <Link to='/register'>Register here</Link>
            <br/>
            Forgot your password? <Link to='/password-reset'>Click here</Link>
            <br/>
            Having issues? <a href="mailto:shpe.hackabull@gmail.com?subject=Account%20support%20request">Contact us</a>
        </div>
    )
}