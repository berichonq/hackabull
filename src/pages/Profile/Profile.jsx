import s from './style.module.css'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

export function Profile() {
    let user = useSelector(state => state.user.data)

    return (
        <div>
            Welcome to your profile, {user.first}
            <br/><br/>





            <br/><br/>
            <Link to='/profile/edit'>Edit Profile</Link>

        </div>
    )

}