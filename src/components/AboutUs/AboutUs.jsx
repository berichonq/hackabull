import React from "react";
import "./AboutUs.css";

export function AboutUs() {
    return (
        <div className="container about-us section mb-11 section overflow-hidden">
          <div className="mb-4 antique-tuscan text-9xl  text-left m-4 pb-3"  data-aos="fade-right">

            <h1 className="pt-48 -mb-8 about-hackabull">
                ABOUT Hackabull
            </h1>
          </div>
            <div className="col">
                <div className="col-md-8 m-2"  data-aos="fade-up-right">
                    <p
                        className="century-ps about-us-font-color text-xl text-left"
                        style={{ columnCount: 2, overflow: "hidden" }}>
                        Welcome to HackaBull 6.0, the University of South Florida's annual 24-hour innovation marathon hosted
                        by the College of Engineering in collaboration with the Society of Hispanic Professional Engineers (SHPE).
                        Celebrating our sixth year, HackaBull is more than a hackathon—it's a vibrant platform for over 300
                        student developers, designers, and tech enthusiasts from across the nation to push the boundaries of
                        technology. Here, participants immerse themselves in a creative frenzy, developing groundbreaking
                        projects using trending technologies, and engaging in fun, challenging competitions.
                    </p>
                </div>
                <div className="col-md-8 m-4" data-aos="fade-up">
                    <p className="century-ps about-us-font-color text-xl text-left">
                        At HackaBull, we are committed to fostering a diverse and dynamic environment where ideas flourish
                        and collaboration is key. It's not just about coding; it's about learning, networking, and building the
                        future. Whether it's creating innovative software, designing unique digital solutions, or exploring new
                        tech frontiers, HackaBull is where students turn their technological dreams into reality. Join us in
                        shaping the next generation of tech pioneers and being a part of this transformative experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
