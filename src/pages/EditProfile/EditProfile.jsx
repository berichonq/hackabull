import s from './style.module.css'
import { Link } from 'react-router-dom'

export function EditProfile() {
    
    return (
      <div>
        You are editing your profile
        <br/>

        {/*Style these as buttons or however you like, but use these <Link> elements for navigation*/}
        <Link to='/profile/'>Cancel</Link> &nbsp;
        <Link to='/profile/'>Submit changes</Link>
      </div>
    )
}