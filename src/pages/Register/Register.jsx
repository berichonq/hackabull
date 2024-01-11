import s from './style.module.css'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'
import { Link } from 'react-router-dom'

export function Register() {

    return (
        <div>
            <RegistrationForm />
        </div>
    )
}