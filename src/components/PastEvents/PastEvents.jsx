import React from "react";
import "./PastEvents.css";
import { useEffect } from "react";
import firstImage from "../../assets/images/Hackabull_Carousel_Image1.jpg";
import secondImage from "../../assets/images/Hackabull_Carousel_Image2.jpeg";
import thirdImage from "../../assets/images/Hackabull_Carousel_Image3.jpeg";
import fourthImage from "../../assets/images/Hackabull_Carousel_Image4.jpg";

export function PastEvents() {
    useEffect(() => {
        var myCarousel = document.querySelector("#carouselExampleAutoplaying");
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2500,
            wrap: true,
        });
    }, []);

    return (
        <div className="past-events container my-20 section">
            <h2 className="mb-4 antique-tuscan text-8xl text-center m-3 pb-3 past-events-color" data-aos="zoom-in">
                Past Events
            </h2>

            <div
                id="carouselExampleAutoplaying"
                className="carousel  slide p-3"
                data-bs-ride="carousel"  data-aos="zoom-in">
                <ol className="carousel-indicators">
                    <li
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="0"
                        className="active"></li>
                    <li
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="1"></li>
                    <li
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="2"></li>
                    <li
                        data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide-to="3"></li>
                </ol>
                <div className="carousel-inner ">
                    {/* Slide 1 */}
                    <div
                        className="carousel-item active"
                        data-bs-interval="3000">
                        <div className="row rounded">
                            <img
                                src={firstImage}
                                className="d-block w-100"
                                alt="First slide"
                            />
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <img
                                src={secondImage}
                                className="d-block w-100"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <img
                                src={thirdImage}
                                className="d-block w-100"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <img
                                src={fourthImage}
                                className="d-block w-100"
                                alt="fourth slide"
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev custom-carousel-control"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next custom-carousel-control"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
