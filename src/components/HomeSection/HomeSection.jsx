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
            {/*Commeneted out till MLH approves*/}
            {/* <div className="fixed top-16 md:top-16 lg:top-0 xl:top-0 2xl:top-0 right-0 z-40 pr-1">
                <a className="navbar-brand m-0 " href="#">
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
                        alt="MLH"
                        className="md:w-16 w-12 h-auto"
                        // width="30"
                        // height="54"
                    />
                </a>
            </div> */}
            <nav className="navbar z-40 fixed-top navbar-expand-lg bg-glass shadow-lg px-4 md:my-0 lg:my-2 xl:my-2 2xl:my-2 sm:mx-0 md:mx-0 lg:mx-20 xl:mx-28 2xl:mx-36 rounded-none lg:rounded-xl xl:rounded-xl 2xl:rounded-xl">
                <div className="container-fluid lg:px-4">
                    <a
                        className="navbar-brand century-ps  about-us-font-color"
                        href="#">
                        <img
                            src={logo}
                            alt="logo"
                            // width="50"
                            // height="auto"
                            className="w-11"
                        />
                        {/* <p className="">HACKABULL 2024</p> */}
                    </a>
                    <button
                        className="navbar-toggler about-us-font-color"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon about-us-font-color"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto bold-century text-xs about-us-font-color sm:text-sm md:text-sm lg:text-sm 2xl:text-sm text-xs text-lmb-2 mb-lg-0">
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
                                    GALLERY
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
                        <div className="block w-full apply-btn border-t my-2 md:hidden" />
                            <ul className="navbar-nav text-xs about-us-font-color sm:text-sm md:text-sm lg:text-sm 2xl:text-sm mb-2 mb-lg-0">
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
            </nav>
            <div className="home_section w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-start text-[#fdedb9] m-auto overflow-hidden">
                <div
                    className="col container w-64 overflow-hidden flex flex-col justify-center items-center"
                    style={{ transform: "translateY(-60%)" }}>
                    <img
                        src={banner}
                        className="w-10/12 sm:w-7/12 md:w-1/3  mb-2"
                    />
                    <div className="apply-btn mt-2 bg-gradient-to-b rounded-lg border border-[#fdedb9] justify-center items-center flex px-4 py-2 sm:px-4 sm:py-2 md:px-8 md:py-4 lg:px-10 lg:py-5">
                        <Link
                            to="/register"
                            className="text-xs bold-century about-us-font-color sm:text-sm md:text-xs lg:text-xs 2xl:text-sm">
                            START HACKING
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
