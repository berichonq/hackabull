import React from "react";
import "./AboutUs.css";

export function AboutUs() {
    return (
        <div className="container mx-auto mt-12 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 flex flex-col justify-start text-[#fdedb9] overflow-hidden">
            <div className="text-left ml- pb-3" data-aos="fade-right">
                <h1 className="antique-tuscan about-us-font-color text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl w-full about-hackabull">
                    About Hackabull
                </h1>
            </div>
            <div className="flex flex-col">
                <div className="sm:w-8/12 w-full" data-aos="fade-up-right">
                    <p
                        className="century-ps about-us-font-color text-sm md:text-xs lg:text-base xl:text-xl 2xl:text-2xl text-left"
                        style={{ columnCount: 2, overflow: "hidden" }}>
                        Welcome to Hackabull 6.0, the University of South
                        Florida's annual 24-hour innovation marathon hosted by
                        the College of Engineering in collaboration with the
                        Society of Hispanic Professional Engineers (SHPE).
                        Hackabull is a vibrant platform for student developers,
                        designers, and tech enthusiasts from across the nation
                        to push the boundaries of technology. Here, participants
                        immerse themselves in a creative frenzy, developing
                        groundbreaking projects using trending technologies, and
                        engaging in fun, challenging competitions.
                    </p>
                </div>
                <div className="sm:w-8/12 pt-2 w-full" data-aos="fade-up">
                    <p className="century-ps about-us-font-color text-sm md:text-xs lg:text-base xl:text-xl 2xl:text-2xl text-left">
                        Whether it's creating innovative software, designing
                        unique digital solutions, or exploring new tech
                        frontiers, Hackabull is where students turn their
                        technological dreams into reality. Join us in shaping
                        the next generation of tech pioneers and being a part of
                        this transformative experience.
                    </p>
                </div>
            </div>
        </div>
    );
}
