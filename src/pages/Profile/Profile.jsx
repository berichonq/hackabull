import s from './style.module.css'
import { Link } from 'react-router-dom'

export function Profile() {
    
    return (
        <div>
            Welcome to your profile
            <br/>
            <Link to='/profile/edit'>Edit Profile</Link>

        </div>
    )
}