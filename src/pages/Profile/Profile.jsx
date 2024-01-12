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

    let key = 0

    const studentInfo = () => {
        let info = []
        info.push(user.first + ' ' + user.last)
        info.push(auth?.currentUser?.email)
        
        switch (user.classification) {
            case "1":
                info.push("Freshman at " + user.university)                        
                break;
            case "2":
                info.push("Sophomore at " + user.university)
                break;
            case "3":
                info.push("Junior at " + user.university)
                break
            case "4":
                info.push("Senior at " + user.university)
                break;
            case "5+":
                info.push("Super Senior at " + user.university)
                break;
            default:
                info.push("No college enrollment")
                break;
        }

        return info
    }

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
            Your information
            <br/>
            { studentInfo().map((datapoint) => (
                <div key={key++}>
                    <p>{datapoint}</p>
                    <br/>
                </div>
            )) }

            <br/><br/>
            <button onClick={logout}> Logout </button>

            <br/><br/>
            <Link to='/profile/edit'>Edit Profile</Link>
            <br/><br/>
            <Link to='/password-reset'>Change password</Link>

        </div>
    )

}