import "./HomeSection.css";
import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { logOff } from "../../store/user/user-slice";
import { useDispatch } from "react-redux";

import { Context } from "../../context/AuthContext";

import { auth } from "../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import banner from "../../assets/images/banner.png";

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
            <div className="mx-15 right-0 px-10 mlh navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
                        alt="MLH"
                        width="90"
                        height="54"
                    />
                </a>
            </div>
            <nav className="navbar my-3 mx-44 fixed-top navbar-expand-lg bg-glass">
                <div className="container-fluid mx-20">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://seeklogo.com/images/B/blank-badge-logo-3871B3A656-seeklogo.com.png"
                            alt="Bootstrap"
                            width="90"
                            height="54"
                        />
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
                        <ul className="navbar-nav mx-auto about-us-font-color mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color "
                                    aria-current="page"
                                    href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    Past Events
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    Schedule
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    Sponsors
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link about-us-font-color"
                                    aria-current="page"
                                    href="#">
                                    Team
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/profile"
                                            className="nav-link about-us-font-color">
                                            Profile
                                        </Link>
                                    </li>
                                )}
                                {!user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/register"
                                            className="nav-link about-us-font-color">
                                            Register
                                        </Link>
                                    </li>
                                )}
                                {user && (
                                    <li className="nav-item">
                                        <button
                                            onClick={logout}
                                            className="nav-link about-us-font-color">
                                            {" "}
                                            Logout{" "}
                                        </button>
                                    </li>
                                )}
                                {!user && (
                                    <li className="nav-item">
                                        <Link
                                            to="/login"
                                            className="nav-link about-us-font-color">
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
                <div className="container">
                    <div className="col container banner">
                        <img src={banner} />
                        <div
                            style={{
                                width: "70%",
                                marginTop: "20px",
                                height: "50px",
                                paddingLeft: 25,
                                paddingRight: 25,
                                paddingTop: 13,
                                paddingBottom: 13,
                                background:
                                    "linear-gradient(180deg, #093460 0%, #0085A4 55%, #E9F0CB 100%)",
                                boxShadow:
                                    "-4px 5px 6.400000095367432px rgba(0, 0, 0, 0.25)",
                                borderRadius: 10,
                                border: "1px #FDEDB9 solid",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "inline-flex",
                            }}>
                            <a
                                href="#"
                                style={{
                                    color: "#FDEDB9",
                                    fontSize: 20,
                                    fontFamily: "Century PS Pro",
                                    fontWeight: "700",
                                    lineHeight: 23.33,
                                    wordWrap: "break-word",
                                }}>
                                APPLY TO ATTEND
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
