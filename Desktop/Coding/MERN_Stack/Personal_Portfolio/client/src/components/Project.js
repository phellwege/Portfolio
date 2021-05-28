import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import "../Project.css"
import img1 from "../static/SW1.png";
import img2 from "../static/SW2.png";
import img3 from "../static/SW3.png";
import img4 from "../static/SW4.png";
import img5 from "../static/SW5.png";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img6 from "../static/EP1.png";
import img7 from "../static/EP2.png";
import img8 from "../static/EP3.png";
import img9 from "../static/EP4.png";

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={img2} onDragStart={handleDragStart} />,
    <img src={img1} onDragStart={handleDragStart} />,
    <img src={img3} onDragStart={handleDragStart} />,
    <img src={img4} onDragStart={handleDragStart} />,
    <img src={img5} onDragStart={handleDragStart} />,
];
const items2 = [
    <img src={img6} onDragStart={handleDragStart} />,
    <img src={img7} onDragStart={handleDragStart} />,
    <img src={img8} onDragStart={handleDragStart} />,
    <img src={img9} onDragStart={handleDragStart} />,
];

const Project = () => {
    return (
        <>
        <div id="full_body_wrap">
            <div id="image_wrap">
            <h2>Star Wars Homecoming</h2><AliceCarousel mouseTracking items={items} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
            </div>
            
            <div class="text_wrap">
                <p>
                    <h3>Description:</h3>
                Collaborated on a team of three and coordinated  planning, creating wireframes, and group discussions in order to increase overall productivity on the project.
Designed a responsive, clean front-end interface using a combination of CSS, SQLite and JQuery to create a more seamless and comprehensive environment.
Implemented a robust SQLite database using Django in order to improve future maintenance, and elevate user experience.
Utilized Bcrypt, and multiple validations to protect our data.
Tested the code using W3 Code Validator to ensure it functioned at its maximum potential. 
<div id="line_break">
    <br/>
</div>
<h3>Want to see more?</h3>
<Link to="/SW">Continue...</Link>
</p>
            </div>
        </div>
        
        <div id="full_body_wrap">
            <div id="image_wrap">
            <h2>Event Planner</h2><AliceCarousel mouseTracking items={items2} autoPlay={true} autoPlayInterval={3000} infinite={true}/>
            </div>
            
            <div class="text_wrap">
                <p>
                    <h3>Description:</h3>
                    Led a team of three engineers remotely via Github tools including facilitating discovery and planning meetings, designing code architecture, producing wireframe and journey maps, and testing to deliver a functional MVP in 7 days. 
Enriched UX with CSS, HTML, JavaScript to create a customer messaging feature similar to Facebook’s, and integrated a third party GoogleMaps API with JQuery to enable geolocation and increase user engagement. 
Maximized user data and application security with JavaBcrypt and optimized load time by testing and validating applications with W3 Code Validator.
<div id="line_break">
    <br/>
</div>
<h3>Want to see more?</h3>
<Link to="/EventPlanner">Continue...</Link>
</p>
            </div>
        </div>
        </>
    )
}
export default Project;