import "./Home.css";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOff } from "../../store/user/user-slice";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Gallery } from "../../components/Gallery/Gallery";
import { FAQ } from "../../components/FAQ/FAQ";
import { Schedule } from "../../components/Schedule/Schedule";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Team } from "../../components/Team/Team";
import { HomeSection } from "../../components/HomeSection/HomeSection";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulate a loading process, e.g., fetching data
        setTimeout(() => setIsLoaded(true), 2000); // Adjust timeout as needed
    
        // Add the no-scroll class to the body when the loader is active
        document.body.classList.add('no-scroll');
    
        return () => {
            // Remove the no-scroll class when the component is unmounted or the loader is hidden
            document.body.classList.remove('no-scroll');
        };
    }, []);
    
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
        <div className="home about-us">
            <div className="z-50 relative">

            <div className={`loading-screen z-50 ${isLoaded ? 'hidden' : ''}`}>
                <div className="loader"></div>
            </div>
            </div>
                <div className="flex flex-col">
                    <div id="home">
                        <HomeSection />
                    </div>
                    <div className="content">
                        <div id="about">
                            <AboutUs />
                        </div>
                        <div id="events">
                            <Gallery />
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
            
        </div>
    );
}
