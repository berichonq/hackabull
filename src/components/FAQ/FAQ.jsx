import './QnA.css'

import { QA } from "./QA";

export function FAQ() {
    return (
        <div id="faq" className="section container mt-10 montserrat relative p-10">
            <div data-aos="fade-right">
                <h1 className="mb-4 antique-tuscan about-us-font-color text-8xl text-left m-4	pb-3 fontSize80">
                    COMMON QUESTIONS
                </h1>
            </div>
            <br />
            <div className="absolute pink_shadow"></div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="flex-col faq-flex justify-items-center">
                        <div className="flex-none mb-3" data-aos="fade-up-right">
                            <QA
                                question={"What is Hackabull?"}
                                answer={
                                    "Hackabull is the University of South Florida's annual hackathon that encourages innovation, collaboration, and learning within technology. It's a 24-hour event where students can create, develop, and showcase projects in a dynamic and supportive environment."
                                }
                            />
                        </div>
                        <div className="flex-none mb-3" data-aos="fade-up-right">
                            <QA
                                question={"Who is eligible to participate in Hackabull?"}
                                answer={
                                    "All current students, whether you're an undergraduate or a graduate, from any university are welcome to apply. We are looking for a diverse group of participants including developers, designers, and all-around tech enthusiasts!"
                                }
                            />
                        </div>
                        <div className="flex-none mb-3" data-aos="fade-up-right">
                            <QA
                                question={"Do I need any prior experience to particpate in Hackabull?"}
                                answer={
                                    "No! Whether you're writing your first line of code or you're a seasoned developer, Hackabull is for everyone who has an interest in technology and a desire to learn."
                                }
                            />
                        </div>

                        <div className="flex-none mb-3" data-aos="fade-up-right">
                            <QA
                                question={"Is there a fee to attend Hackabull?"}
                                answer={
                                    "Hackabull is completely free for all participants. Our aim is to make learning and innovation accessible to everyone."
                                }
                            />
                        </div>
                        <div className="flex-none mb-3" data-aos="fade-up-left">
                            <QA
                                question={"How can I register for Hackabull?"}
                                answer={
                                    "It's simple! Click on the 'Apply' button at the top of this page to get started!"
                                }
                            />
                        </div>
                        <div className="flex-none mb-3" data-aos="fade-up-left">
                            <QA
                                question={"What should I bring to Hackabull?"}
                                answer={
                                    "Bring your laptop, charger, a valid student ID, any hardware you wish to use for your project, and lots of enthusiasm! If you plan to stay overnight, you might also want to bring a sleeping bag and any personal items you'll need."
                                }
                            />
                        </div>
                    </div>

                <div className="col-lg-6"></div>
                </div>

                <div className="col-lg-6">
                    <div className="flex-none mb-3" data-aos="fade-up-left">
                        <QA
                            question={"Can I participate in Hackabull without a team?"}
                            answer={
                                "Absolutely! You can join as an individual and team up with other participants at the event. We'll have team-building activities to help you find the perfect group."
                            }
                        />
                    </div>
                    <div className="flex-none mb-3" data-aos="fade-up-left">
                        <QA
                            question={"What kind of projects can I work on at Hackabull?"}
                            answer={
                                "You can work on any project that interests you. It could be a web app, mobile app, hardware hack, or anything else you can think up. Creativity is key!"
                            }
                        />
                    </div>
                    <div className="flex-none mb-3" data-aos="fade-up-right">
                        <QA
                            question={"Will there be prizes or swag at Hackabull?"}
                            answer={
                                "Yes! All participants will receive some awesome Hackabull swag, and there will be prizes for the best hacks!"
                            }
                        />
                    </div>
                    <div className="flex-none mb-3" data-aos="fade-up-right">
                        <QA
                            question={"Are there any rules for the projects at Hackabull?"}
                            answer={
                                "Projects must be started from scratch during the hackathon and completed within the 24-hour timeframe."
                            }
                        />
                    </div>
                    <div className="flex-none mb-3" data-aos="fade-up-right">
                        <QA
                            question={"What resources will be available to me at Hackabull?"}
                            answer={
                                "We will provide mentors, workshops, and various tools to help you build your project. Plus, there will be plenty of food and drinks to keep you going!"
                            }
                        />
                    </div>
                    <div className="flex-none mb-3" data-aos="fade-up-right">
                        <QA
                            question={"What if I have more questions about Hackabull?"}
                            answer={
                                <>
                                    <p>We're here to help! If you have more questions, feel free to reach out to us at
                                        <a
                                            href="mailto:shpe.hackabull@gmail.com?subject=Account%20support%20request"
                                            className="contact-us-link"
                                        >
                                            shpe.hackabull@gmail.com
                                        </a>
                                        , and we'll get back to you as soon as possible.
                                    </p>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
