<<<<<<< Updated upstream
import s from './style.module.css'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'

export function Register() {

    return (
        <div>
            <RegistrationForm />
        </div>
    )
}
=======
import s from "./style.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export function Register() {
  return (
    <div>
      <RegisterForm />
      Welcome to registration
      <br />
      Already registered? <Link to="/login">Login here</Link>
    </div>
  );
}
>>>>>>> Stashed changes
