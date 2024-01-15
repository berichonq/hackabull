import React from "react";
import "./Team.css"
import board1 from "../../assets/images/board.png"
import board2 from "../../assets/images/board.png"
import board3 from "../../assets/images/board.png"
import board4 from "../../assets/images/board.png"
import board5 from "../../assets/images/board.png"
import board6 from "../../assets/images/board.png"
import board7 from "../../assets/images/board.png"
import board8 from "../../assets/images/board.png"
import board9 from "../../assets/images/board.png"
import board10 from "../../assets/images/board.png"
import board11 from "../../assets/images/board.png"
import board12 from "../../assets/images/board.png"
import board13 from "../../assets/images/board.png"

export function Team() {
  const members = [
    { image: board1, link: "https://www.linkedin.com/in/member1" },
    { image: board2, link: "https://www.linkedin.com/in/member1" },
    { image: board3, link: "https://www.linkedin.com/in/member1" },
    { image: board4, link: "https://www.linkedin.com/in/member1" },
    { image: board5, link: "https://www.linkedin.com/in/member1" },
    { image: board6, link: "https://www.linkedin.com/in/member1" },
    { image: board7, link: "https://www.linkedin.com/in/member1" },
    { image: board8, link: "https://www.linkedin.com/in/member1" },
    { image: board9, link: "https://www.linkedin.com/in/member1" },
    { image: board10, link: "https://www.linkedin.com/in/member1" },
    // Add other members similarly
  ];

  return (
    <div className="container team mx-auto p-4">
    <h2 className="mb-4 antique-tuscan relative z-20 about-us-font-color text-9xl text-center m-4	pb-3">
        team
    </h2>
      <div className="row justify-center">
        {members.map((member, index) => (
          <div key={index} className="col-2  m-2">
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <img src={member.image} alt={`Board member ${index + 1}`} className="w-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
