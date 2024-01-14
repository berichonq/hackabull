import React from "react";
import "./HomeSection.css";

export function HomeSection() {
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
                                <li className="nav-item">
                                    <a
                                        className="nav-link about-us-font-color"
                                        aria-current="page"
                                        href="#">
                                        Sign In
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link about-us-font-color"
                                        aria-current="page"
                                        href="#">
                                        Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="home_section"></div>
        </div>
    );
}
