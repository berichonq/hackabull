import "./Home.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOff } from "../../store/user/user-slice";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { AboutUs } from "../../components/AboutUs/aboutus";
import { PastEvents } from "../../components/PastEvents/PastEvents";
import { FAQ } from "../../components/FAQ/FAQ";
import { Schedule } from "../../components/Schedule/Schedule";
import { Sponsors } from "../../components/Sponsors/Sponsors";
import { Team } from "../../components/Team/Team";
import { HomeSection } from "../../components/HomeSection/HomeSection";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    //////////////////////////////////////////////////////////////////////////////////////////////
    // Logout button needs to be moved to navbar. Should only be rendered if user is authenticated
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
        <div className="home">
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
    );
}
