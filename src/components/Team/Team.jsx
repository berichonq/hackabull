import React from "react";
import "./Team.css";

import Asadbek from "../../assets/images/Asadbek.png";
import Linda from "../../assets/images/Linda.png";
import Quinn from "../../assets/images/Quinn.png";
import Ayush from "../../assets/images/Ayush.png";
import Marsel from "../../assets/images/Marsel.png";
import Vasili from "../../assets/images/Vasili.png";
import Diya from "../../assets/images/Diya.png";
import Michael from "../../assets/images/Michael.png";
import Kashish from "../../assets/images/Kashish.png";
import Shivam from "../../assets/images/Shivam.png";
import Parag from "../../assets/images/Parag.png";

export function Team() {
    const members = [
        { image: Asadbek, link: "https://www.linkedin.com/in/asadbeknematov" },
        { image: Linda, link: "https://www.linkedin.com/in/linda--nguyen/" },
        { image: Quinn, link: "https://www.linkedin.com/in/berichonq" },
        { image: Ayush, link: "https://www.linkedin.com/in/ayush278" },
        { image: Marsel, link: "https://www.linkedin.com/in/marsel-fetlyaev" },
        {
            image: Vasili,
            link: "https://www.linkedin.com/in/vasilikitaigorodv",
        },
        { image: Diya, link: "https://www.linkedin.com/in/diyajain08" },
        { image: Michael, link: "https://www.linkedin.com/in/ngu-truong" },
        { image: Kashish, link: "https://www.linkedin.com/in/kashishadlakha8" },
        { image: Shivam, link: "https://www.linkedin.com/in/shivamchauhan-" },
        { image: Parag, link: "https://www.linkedin.com/in/parag-jain-usf" },
        { image: Parag, link: "https://www.linkedin.com/in/gehnnaghai/" },
        { image: Parag, link: "https://www.linkedin.com/in/gehnnaghai/" },
        // Add other members similarly
    ];
    // Filter out Marsel and Shivam
    const specialMembers = members.filter(member =>
        member.image === Marsel || member.image === Shivam
    );

    // Filter out the rest of the members
    const otherMembers = members.filter(member =>
        member.image !== Marsel && member.image !== Shivam
    );

    return (
        <div className="container team mx-auto p-4">
            <div data-aos="fade-up">
                <h2 className="mb-4 antique-tuscan about-us-font-color text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-10xl about-hackabull text-center m-4 pb-3">
                    team
                </h2>
            </div>
            <div className="flex justify-around flex-wrap">
                {specialMembers.map((member, index) => (
                    <div key={index} className="m-2 team-card flex-item w-1/4 sm:w-1/5 lg:w-1/6 transition duration-400">
                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                            <img src={member.image} alt={`Special member ${index + 1}`} className="w-full" />
                        </a>
                    </div>
                ))}
            </div>
            <div className="flex justify-around flex-wrap">
                {otherMembers.map((member, index) => (
                    <div key={index} className="m-2 team-card flex-item w-1/4 sm:w-1/5 lg:w-1/6 transition duration-400">
                        <a href={member.link} target="_blank" rel="noopener noreferrer">
                            <img src={member.image} alt={`Team member ${index + 1}`} className="w-full" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
