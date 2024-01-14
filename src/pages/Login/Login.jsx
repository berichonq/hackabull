import "./Login.css";
import loginImage from "../../assets/images/login-page.png";

import { Link } from "react-router-dom";

import { LoginForm } from "../../components/LoginForm/LoginForm";

const linkStyle = {
  color: "#052B56",
  transition: "color 0.3s ease", // Smooth color transition on hover
};

export function Login() {
  return (
    <div className="century-ps text-xl text-left h-screen">
      <div className="row">
        <div className="col-lg col-md">
          <div className="center">
            <p
              className="title text-2xl bold-century"
              style={linkStyle}
              id="title"
            >
              Welcome to Hackabull 2024 at USF!
            </p>
            <br />
            <LoginForm />
            <Link to="/register" className="linkStyle">
              Haven't registered?
            </Link>
            <br />
            <Link to="/password-reset" className="linkStyle">
              Forgot password?{" "}
            </Link>

            <br />
            <a
              href="mailto:shpe.hackabull@gmail.com?subject=Account%20support%20request"
              className="linkStyle"
            >
              Experiencing issues?{" "}
            </a>
          </div>
        </div>
        <div className="col-lg col-md d-none d-md-block">
          <img className="login-img" src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
}
