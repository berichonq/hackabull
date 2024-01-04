import s from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux';
import { logOff } from '../../store/user/user-slice';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

export function Profile() {
    const user = useSelector(state => state.user.data)
    const navigate = useNavigate()

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(logOff())
            navigate('/')
        } catch (err) {
            console.error(err)
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            Welcome to your profile, {user.first}
            <br/><br/>
            <br/>
            <button onClick={logout}> Logout </button>

            <br/><br/>
            <Link to='/profile/edit'>Edit Profile</Link>

        </div>
    )

}