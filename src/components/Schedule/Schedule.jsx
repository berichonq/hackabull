import React from "react";
import "./Schedule.css";

export function Schedule() {
    return (
      
      <div>
        <h2 className="mb-12 antique-tuscan relative z-20 about-us-font-color text-9xl text-center m-4	pb-3">EVENT TIMELINE</h2>
      
        <div className="container schedule-page w-full h-vh px-auto">
          <div className="schedule-main text-center	 w-full z-10 px-20 absolute"></div>
            <div className="schedule-container  py-24 w-5/6 relative z-20 select-none">
                <table className="schedule">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Event</th>
                            <th>Organizer</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Time">8 AM - 11 AM</td>
                            <td data-label="Event">Check-In Time</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">
                                HALL OF FLAGS (ENB II)
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Time">10 AM - 11 AM</td>
                            <td data-label="Event">Opening Ceremony</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">11:00 AM</td>
                            <td data-label="Event">Hacking Begins!</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">All</td>
                        </tr>

                        <tr>
                            <td data-label="Time">12:00 PM - 12:55 PM</td>
                            <td data-label="Event">Technical Interview Prep</td>
                            <td data-label="Organizer">
                                Association for Computing Machinery (ACM)
                            </td>
                            <td data-label="Location">ENB 116</td>
                        </tr>

                        <tr>
                            <td data-label="Time">12:00 PM - 12:55 PM</td>
                            <td data-label="Event">
                                How to Present Your Project
                            </td>
                            <td data-label="Organizer">
                                Society of Professional Hispanic Engineers
                                (SHPE)
                            </td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">1:00 PM - 1:55 PM</td>
                            <td data-label="Event">
                                Web3 and Crypto Basics Workshop
                            </td>
                            <td data-label="Organizer">
                                Society of Professional Hispanic Engineers
                                (SHPE)
                            </td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">1:00 PM - 1:55 PM</td>
                            <td data-label="Event">
                                Competitive Coding Challenge
                            </td>
                            <td data-label="Organizer">
                                Association for Computing Machinery (ACM)
                            </td>
                            <td data-label="Location">ENB 116</td>
                        </tr>

                        <tr>
                            <td data-label="Time">1:55 PM - 2:25 PM</td>
                            <td data-label="Event">Lunch</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">ENB</td>
                        </tr>

                        <tr>
                            <td data-label="Time">2:15 PM - 3:55 PM</td>
                            <td data-label="Event">Website Development</td>
                            <td data-label="Organizer">
                                IEEE Computer Society
                            </td>
                            <td data-label="Location">ENB 116</td>
                        </tr>

                        <tr>
                            <td data-label="Time">2:15 PM - 3:55 PM</td>
                            <td data-label="Event">
                                Internet of Things with Amazon Echo
                            </td>
                            <td data-label="Organizer">
                                IEEE Computer Society
                            </td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">4:00 PM - 4:55 PM</td>
                            <td data-label="Event">Git Fundamentals</td>
                            <td data-label="Organizer">
                                Women in Computer Science and Engineering
                                (WiCSE)
                            </td>
                            <td data-label="Location">ENB 116</td>
                        </tr>

                        <tr>
                            <td data-label="Time">4:00 PM - 4:55 PM</td>
                            <td data-label="Event">
                                Web App Deployment with Docker and Azure
                            </td>
                            <td data-label="Organizer">
                                Google Developer Student Club (GDSC)
                            </td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">5:00 PM - 5:55 PM</td>
                            <td data-label="Event">
                                SQL Basics for Data Science
                            </td>
                            <td data-label="Organizer">Girls Who Code (GWC)</td>
                            <td data-label="Location">ENB 116</td>
                        </tr>

                        <tr>
                            <td data-label="Time">5:00 PM - 5:55 PM</td>
                            <td data-label="Event">
                                Deep Learning with PyTorch
                            </td>
                            <td data-label="Organizer">
                                Data Science Club (DSC)
                            </td>
                            <td data-label="Location">ENB 118</td>
                        </tr>

                        <tr>
                            <td data-label="Time">6:00 PM - 7:00 PM</td>
                            <td data-label="Event">Dinner</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">ENB</td>
                        </tr>

                        <tr>
                            <td data-label="Time">7:30 PM - 8:30 PM</td>
                            <td data-label="Event">Team Games</td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">
                                HALL OF FLAGS (ENB II)
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Time">9:00 PM</td>
                            <td data-label="Event">
                                Hacking Stops, Judging Starts
                            </td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">All</td>
                        </tr>

                        <tr>
                            <td data-label="Time">10:00 PM - 10:30 PM</td>
                            <td data-label="Event">
                                Closing Ceremony and Prizes
                            </td>
                            <td data-label="Organizer">Everyone</td>
                            <td data-label="Location">ENB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </div>
        </div>
    );
}
