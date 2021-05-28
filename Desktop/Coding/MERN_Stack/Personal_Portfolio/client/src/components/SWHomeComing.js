import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import img1 from "../static/SW1.png";
import img2 from "../static/SW2.png";
import img3 from "../static/SW3.png";
import img4 from "../static/SW4.png";
import img5 from "../static/SW5.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Logo from "./Logo";
import BottomFooter from "../components/BottomFooter";
import "../Detail.css";


const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img2} onDragStart={handleDragStart} />,
    <img src={img1} onDragStart={handleDragStart} />,
    <img src={img3} onDragStart={handleDragStart} />,
    <img src={img4} onDragStart={handleDragStart} />,
    <img src={img5} onDragStart={handleDragStart} />,
];

const SWHomeComing = () => {
    return (
        <>
        <Logo/>
            <div id="full_body_wrapper">
                <div id="image_wrapper">
                    <h2>Star Wars Homecoming</h2><AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
                </div>
                <div class="text_wrapper">
                    <p>
                    <h3>Non-Technical Description:</h3>
                    <p>This was a really fun Python project that three engineers completed in a little under four days.
                        We didn't want to utilize any API's, because we wanted to build everything form scratch. 
                        The overall concept is a text based star wars game, which gave us some interesting requirements.
                        We needed a login and registration, as well as character selection and individual statistics.
                        We then needed to create a massive database of planets, and their specific information to allow travel to unique worlds.
                    </p>

                        <h3>Technical Description:</h3>
                    Collaborated on a team of three and coordinated  planning, creating wireframes, and group discussions in order to increase overall productivity on the project.
    Designed a responsive, clean front-end interface using a combination of CSS, SQLite and JQuery to create a more seamless and comprehensive environment.
    Implemented a robust SQLite database using Django in order to improve future maintenance, and elevate user experience.
    Utilized Bcrypt, and multiple validations to protect our data.
    Tested the code using W3 Code Validator to ensure it functioned at its maximum potential. 
                <h3>Check it out Live here!</h3>
                <a href="//ec2-3-14-141-156.us-east-2.compute.amazonaws.com/" target="_blank" rel="noopener noreferrer">Live Version</a></p>
                </div>
                </div>
                <div class="text_wrapper">
                    <p>
                        <h3>Technology Utilized:</h3>
                        Python, HTML5, CSS, JavaScript, SQLite, Django, JQuery, VS Code, AJAX, Github, Bash, ZSH, AWS EC2, BCrypt.</p>
                </div>
            <BottomFooter/>
        </>
    )
};
export default SWHomeComing;