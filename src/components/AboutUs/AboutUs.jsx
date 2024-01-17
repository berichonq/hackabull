import React from "react";
import "./AboutUs.css";

export function AboutUs() {
    return (
        <div className="container about-us mx-5 section section">
          <div className="text-left m-4 pb-3"  data-aos="fade-right">

            <h1 className="-mb-4 antique-tuscan text-9xl about-hackabull">
                About Hackabull
            </h1>
          </div>
            <div className="col">
                <div className="col-md-8 m-4"  data-aos="fade-up-right">
                    <p
                        className="century-ps about-us-font-color text-xl text-left"
                        style={{ columnCount: 2, overflow: "hidden" }}>
                        Welcome to Hackabull 6.0, the University of South Florida's annual 24-hour innovation marathon hosted
                        by the College of Engineering in collaboration with the Society of Hispanic Professional Engineers (SHPE).
                        Hackabull is a vibrant platform for student developers, designers, and tech enthusiasts from across the
                        nation to push the boundaries of technology. Here, participants immerse themselves in a creative frenzy,
                        developing groundbreaking projects using trending technologies, and engaging in fun, challenging competitions.
                    </p>
                </div>
                <div className="col-md-8 m-4" data-aos="fade-up">
                    <p className="century-ps about-us-font-color text-xl text-left">
                        Whether it's creating innovative software, designing unique digital solutions, or exploring new
                        tech frontiers, Hackabull is where students turn their technological dreams into reality. Join us in
                        shaping the next generation of tech pioneers and being a part of this transformative experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
