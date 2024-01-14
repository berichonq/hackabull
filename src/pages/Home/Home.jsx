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
import {HomeSection} from "../../components/HomeSection/HomeSection";

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
            <HomeSection/>
{/* <button onClick={logout}> Logout </button> */}
            <div className="content">
                <AboutUs />
                <PastEvents />
                <Schedule />
                <Sponsors />
                <FAQ />
                <Team />
            </div>
        </div>
    );
}
