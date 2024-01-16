import "./Home.css";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOff } from "../../store/user/user-slice";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { PastEvents } from "../../components/PastEvents/PastEvents";
import { FAQ } from "../../components/FAQ/FAQ";
import { Schedule } from "../../components/Schedule/Schedule";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Team } from "../../components/Team/Team";
import { HomeSection } from "../../components/HomeSection/HomeSection";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    useEffect(() => {
        // Simulate a loading process, e.g., fetching data
        setTimeout(() => setIsLoading(false), 5000); // remove timeout in real use case
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(logOff());
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="home section">
            {isLoading ? (
                <div className="loading-screen">
                    <div className="loader"></div>{" "}
                </div>
            ) : (
                <div className="flex flex-col">
                    <div id="home">
                        <HomeSection />
                    </div>
                    <div className="content">
                        <div id="about">
                            <AboutUs />
                        </div>
                        <div id="events">
                            <PastEvents />
                        </div>
                        <div id="schedule">
                            <Schedule />
                        </div>
                        <div id="sponsors">
                            <Sponsors />
                        </div>
                        <div id="faq">
                            <FAQ />
                        </div>
                        <div id="team">
                            <Team />
                        </div>
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}
