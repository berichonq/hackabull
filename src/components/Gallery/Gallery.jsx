import React from "react";
import "./Gallery.css";
import { useEffect } from "react";
import firstImage from "../../assets/images/Hackabull_Carousel_Image1.jpg";

import secondImage from "../../assets/images/Hackabull_Carousel_Image2.jpeg";
import thirdImage from "../../assets/images/Hackabull_Carousel_Image3.jpeg";
import fourthImage from "../../assets/images/Hackabull_Carousel_Image4.jpg";

export function Gallery() {
    useEffect(() => {
        var myCarousel = document.querySelector("#carouselExampleAutoplaying");
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 2000,
            wrap: true,
        });
    }, []);

    return (
        <div className="gallery container mx-auto mb-32 flex flex-col justify-center w-9/10 text-blue-900">
            <h1 className="antique-tuscan gallery-p text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-10xl w-full about-hackabull" data-aos="zoom-in">
                Gallery
            </h1>

            <div
                id="carouselExampleAutoplaying"
                className="carousel  slide p-3"
                data-bs-ride="carousel"
                data-aos="zoom-in">
                <ol className="carousel-indicators -bottom-6">
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
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={firstImage}
                                    className="d-block w-100 p-2"
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps pt-3 gallery-p font-bold text-4xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Heading for First Slide
                                    </h3>
                                    <p className="century-ps pt-3 gallery-p gallery-p text-xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magnam adipisci iure
                                        quasi inventore labore ex eius
                                        assumenda, soluta voluptatibus
                                        reprehenderit, veniam aperiam quia
                                        dicta? Asperiores sequi harum fugiat
                                        illo quasi?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={secondImage}
                                    className="d-block w-100 p-2"
                                    alt="Second slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps font-bold  pt-3 gallery-p text-4xl text-center md:text-left ls:text-left xl:text-left 2xl:text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Heading for Second Slide
                                    </h3>
                                    <p className="century-ps pt-3 gallery-p gallery-p text-xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magnam adipisci iure
                                        quasi inventore labore ex eius
                                        assumenda, soluta voluptatibus
                                        reprehenderit, veniam aperiam quia
                                        dicta? Asperiores sequi harum fugiat
                                        illo quasi?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={thirdImage}
                                    className="d-block w-100 p-2"
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps pt-3 gallery-p text-4xl font-bold text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Heading for Third Slide
                                    </h3>
                                    <p className="century-ps pt-3 gallery-p gallery-p text-xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magnam adipisci iure
                                        quasi inventore labore ex eius
                                        assumenda, soluta voluptatibus
                                        reprehenderit, veniam aperiam quia
                                        dicta? Asperiores sequi harum fugiat
                                        illo quasi?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={secondImage}
                                    className="d-block w-100 p-2"
                                    alt="Fourth slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps font-bold  pt-3 gallery-p text-4xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Heading for Second Slide
                                    </h3>
                                    <p className="century-ps pt-3 gallery-p gallery-p text-xl text-center md:text-left ls:text-left xl:text-left 2xl:text-left">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Magnam adipisci iure
                                        quasi inventore labore ex eius
                                        assumenda, soluta voluptatibus
                                        reprehenderit, veniam aperiam quia
                                        dicta? Asperiores sequi harum fugiat
                                        illo quasi?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                className="carousel-control-prev custom-carousel-control absolute top-1/2 -translate-y-1/2 z-5"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next custom-carousel-control absolute top-1/2 -translate-y-1/2 z-5"
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
