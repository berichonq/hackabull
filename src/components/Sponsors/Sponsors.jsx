import React from "react";
import "./Sponsors.css";
import firstImage from "../../assets/images/logo1.png";
import secondImage from "../../assets/images/logo2.png";
import thirdImage from "../../assets/images/logo3.png";
import fourthImage from "../../assets/images/logo4.png";
import fifthImage from "../../assets/images/logo5.png";
import sixthImage from "../../assets/images/logo6.png";
import seventhImage from "../../assets/images/logo7.png";
import eighthImage from "../../assets/images/logo8.png";
import ninthImage from "../../assets/images/logo9.png";
import tenthImage from "../../assets/images/logo10.png";

export function Sponsors() {
    return (
        <div className="sponsors section grey">
            <div className="container mx-auto my-8">
                <div className="flex flex-wrap justify-between">
                    <h2 className="text-2xl font-bold mb-4">
                        We are a <span className="text-blue-600">trusted</span>{" "}
                        technology{" "}
                        <span className="text-blue-600">partner</span> for
                        recognized brands
                    </h2>
                    <div className="text-gray-600">
                        We have worked with top brands...
                    </div>
                </div>
                <div className="marquee-wrapper my-8">
                    <div className="marquee flex overflow-hidden">
                        <div className="marquee_content flex animate-scroll">
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={firstImage}
                                    alt="Brand Logo 1"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={secondImage}
                                    alt="Brand Logo 2"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={thirdImage}
                                    alt="Brand Logo 3"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper mx-4">
                                <img
                                    src={fourthImage}
                                    alt="Brand Logo 4"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={fifthImage}
                                    alt="Brand Logo 5"
                                    className="w-auto h-20"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="marquee flex overflow-hidden">
                        <div className="marquee_content flex animate-scroll reverse">
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={sixthImage}
                                    alt="Brand Logo 6"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={seventhImage}
                                    alt="Brand Logo 7"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={eighthImage}
                                    alt="Brand Logo 8"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={ninthImage}
                                    alt="Brand Logo 9"
                                    className="w-auto h-20"
                                />
                            </div>
                            <div className="partners_logo_wrapper m-2">
                                <img
                                    src={tenthImage}
                                    alt="Brand Logo 10"
                                    className="w-auto h-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
