import React from "react";
import "./PastEvents.css";
    import { useEffect } from 'react';
import firstImage from "../../assets/images/1.jpg";
import secondImage from "../../assets/images/2.jpg";
import thirdImage from "../../assets/images/3.jpg";

export function PastEvents() {

useEffect(() => {
    var myCarousel = document.querySelector('#carouselExampleAutoplaying')
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    })
}, []);

    return (
        <div className="past-events container my-20">
            <h2 className="mb-4 antique-tuscan text-8xl text-center m-3 pb-3 past-events-color">
                Past Events
            </h2>
            
            <div
                id="carouselExampleAutoplaying"
                className="carousel  slide p-3"
                data-bs-ride="carousel">
                    <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2"></li>
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
                                    className="d-block w-100"
                                    alt="First slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps p-3 font-bold text-4xl text-left">
                                        Heading for First Slide
                                    </h3>
                                    <p className="century-ps p-3 past-events-p text-xl text-left">
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
                                    className="d-block w-100"
                                    alt="Second slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps font-bold  p-3 text-4xl text-left">
                                        Heading for Second Slide
                                    </h3>
                                    <p className="century-ps p-3 past-events-p text-xl text-left">
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
                                    className="d-block w-100"
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-md-6 d-flex p-10 align-items-center">
                                <div>
                                    <h3 className="century-ps p-3 text-4xl font-bold text-left">
                                        Heading for Third Slide
                                    </h3>
                                    <p className="century-ps p-3 past-events-p text-xl text-left">
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
