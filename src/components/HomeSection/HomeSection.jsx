import "./HomeSection.css";
import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { logOff } from "../../store/user/user-slice";
import { useDispatch } from "react-redux";

import { Context } from "../../context/AuthContext";

import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/LineArt-bold-white.png";


export function HomeSection() {
    let { user } = useContext(Context);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(logOff());
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <div className="right-1 px-2 mlh navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
                        alt="MLH"
                        width="90"
                        height="54"
                    />
                </a>
            </div>
            <nav className="navbar my-2 mx-28 xl:px-10 lg:px-4 md:px-2 fixed-top navbar-expand-lg bg-glass">
                <div className="container-fluid lg:px-4">
                    <a className="navbar-brand century-ps  about-us-font-color" href="/">
                        <img
                            src={logo}
                            alt="Bootstrap"
                            // width="50"
                            // height="auto"
                            className="w-10"
                        />
                    {/* <p className="">HACKABULL 2024</p> */}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto century-ps about-us-font-color text-xs lg:text-sm text-lmb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color "
                                    aria-current="page"
                                    href="#home">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link  about-us-font-color"
                                    aria-current="page"
                                    href="#about">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#events">
                                    PAST EVENTS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#schedule">
                                    SCHEDULE
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#sponsors">
                                    SPONSORS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#team">
                                    TEAM
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/profile"
                                            className="nav-link mx-auto century-ps  mb-2 mb-lg-0 about-us-font-color">
                                            Profile
                                        </Link>
                                    </li>
                                )}
                                {!user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/register"
                                            className="nav-link mx-auto century-ps  mb-2 mb-lg-0 about-us-font-color">
                                            Register
                                        </Link>
                                    </li>
                                )}
                                {user && (
                                    <li className="nav-item">
                                        <button
                                            onClick={logout}
                                            className="nav-link mx-auto century-ps  mb-2 mb-lg-0 about-us-font-color">
                                            {" "}
                                            Logout{" "}
                                        </button>
                                    </li>
                                )}
                                {!user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/login"
                                            className="nav-link mx-auto century-ps  mb-2 mb-lg-0 about-us-font-color">
                                            Login
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="home_section">
                <div className="col container banner">
                    <img src={banner} />
                    <div className="apply-btn">
                        <a
                            className="century-ps team-card apply-btn-link"
                            href="/register">
                            APPLY TO ATTEND
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
