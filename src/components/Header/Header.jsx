import s from './style.module.css'
import { Link } from 'react-router-dom'

export function Header() {

    return (
        <div>
            <h2>Welcome to Hackabull</h2>

            {/*Style them how you like, but use these <Link> elements instead of <a> elements to navigate the react router dom*/}

            <Link to='/'>Home</Link> &nbsp;
            <Link to='/login'>Login</Link> &nbsp;
            <Link to='/profile'>Profile</Link> &nbsp;
            <br/><br/>
        </div>
    )
}