import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import img6 from "../static/EP1.png";
import img7 from "../static/EP2.png";
import img8 from "../static/EP3.png";
import img9 from "../static/EP4.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logo from "./Logo";
import BottomFooter from "../components/BottomFooter";
import "../Detail.css"

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img6} onDragStart={handleDragStart} />,
    <img src={img7} onDragStart={handleDragStart} />,
    <img src={img8} onDragStart={handleDragStart} />,
    <img src={img9} onDragStart={handleDragStart} />,
];

const EventPlanner = () => {
    return (
        <>
        <Logo/>
            <div id="full_body_wrapper">
                <div id="image_wrapper">
                    <h2>Event Planner</h2><AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
                </div>
                <div class="text_wrapper">
                    <p>
                    <h3>Non-Technical Description:</h3>
                        <p>This Java Project required a lot of thought, for being such a simplistic application. I added in-State and out-of-State protocols for users, as well as dynamic google maps api. Which proved to be surprisingly challenging.
                            This application needed a login and registration page as well as the JavaBcrypt backend frameworks for it to function. It has a number of users feature, and each user can attend/cancel their attendance. They can also comment on any Event, and edit or delete only their own comments.
                            Each event can be edited only by the Host of the event. This was a challenging, but very fun little project over the course of two days.</p>
                        <h3>Technical Description:</h3>
                        Led a team of three engineers remotely via Github tools including facilitating discovery and planning meetings, designing code architecture, producing wireframe and journey maps, and testing to deliver a functional MVP in 7 days. 
Enriched UX with CSS, HTML, JavaScript to create a customer messaging feature similar to Facebook’s, and integrated a third party GoogleMaps API with JQuery to enable geolocation and increase user engagement. 
Maximized user data and application security with JavaBcrypt and optimized load time by testing and validating applications with W3 Code Validator.
</p>
                </div>
                </div>
                <div class="text_wrapper">
                    <p>
                        <h3>Technology Utilized:</h3>
                        Java, HTML5, CSS, JavaScript, mySQL, Node.js, JQuery, JSP, Apache, Spring Boot, JSP, Github, Bash, ZSH, Postman, AWS EC2, MySQL Workbench, MAMP, Bootstrap, JavaBCrypt.</p>
                </div>
            <BottomFooter/>
        </>
    )
};
export default EventPlanner;