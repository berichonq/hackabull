import s from './style.module.css'
import { Link } from 'react-router-dom'

export function Header() {

    return (
        // Style them how you like, but use these links instead of anchor elements (<a>) to navigate the react router dom
        <div>
            <h2>Welcome to Hackabull</h2>

            <Link to='/'>Home</Link> &nbsp;
            <Link to='/login'>Login</Link> &nbsp;
            <Link to='/profile'>Profile</Link> &nbsp;
            <br/><br/>
        </div>
    )
}