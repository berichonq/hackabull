import React from "react";
import "./Team.css"
import Asadbek from "../../assets/images/Asadbek.png"
import Linda from "../../assets/images/Linda.png"
import Quinn from "../../assets/images/Quinn.png"
import Ayush from "../../assets/images/Ayush.png"
import Marsel from "../../assets/images/Marsel.png"
import Vasili from "../../assets/images/Vasili.png"
import Diya from "../../assets/images/Diya.png"
import Michael from "../../assets/images/Michael.png"
import Kashish from "../../assets/images/Kashish.png"

export function Team() {
  const members = [
    { image: Asadbek, link: "https://www.linkedin.com/in/asadbeknematov" },
    { image: Linda, link: "https://www.linkedin.com/in/linda--nguyen/" },
    { image: Quinn, link: "https://www.linkedin.com/in/berichonq" },
    { image: Ayush, link: "https://www.linkedin.com/in/ayush278" },
    { image: Marsel, link: "https://www.linkedin.com/in/marsel-fetlyaev" },
    { image: Vasili, link: "https://www.linkedin.com/in/vasilikitaigorodv" },
    { image: Diya, link: "https://www.linkedin.com/in/diyajain08" },
    { image: Michael, link: "https://www.linkedin.com/in/ngu-truong" },
    { image: Kashish, link: "https://www.linkedin.com/in/kashishadlakha8" },
    // Add other members similarly
  ];

  return (
    <div className="container team mx-auto p-4">
    <h2 className="mb-4 antique-tuscan relative z-20 about-us-font-color text-9xl text-center m-4	pb-3">
        team
    </h2>
      <div className="row justify-center">
        {members.map((member, index) => (
          <div key={index} className="col-2  m-2 team-card">
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <img src={member.image} alt={`Board member ${index + 1}`} className="w-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
