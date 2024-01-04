import s from './style.module.css'

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOff } from '../../store/user/user-slice';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

export function Home() {
    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            Welcome home
            <br/>
            <button onClick={logout}> Logout </button>
        </div>
    )
}