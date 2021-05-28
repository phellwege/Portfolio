import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Logo from "../components/Logo"
import BottomFooter from "../components/BottomFooter"
import LoopTrue from './LoopProp'
import LinkedinLoop from './LinkedinLoop'
import HeadShot from '../static/HeadShot.jpeg'
import "../About.css"


const About = () => {
    return (
        <>
            <Logo />
            <div id="full_body_wrap">
                <div id="image_wrap">
                    <h1>About Me</h1>
                    <img src={HeadShot} id="HeadShotImg" />
                </div>
                <div class="text_wrap">
                    <p>I am a student at Coding Dojo, where I am learning three full stacks. I enjoy learning new technologies. I studied Applied Physics at Boise State University, and decided college wasn't for me. I worked hard at a lot of other jobs that but I didn't feel like I fit. I started coding, and I loved it! It made me decide I needed to get educated in software engineering, but I didn't want to spend four years learning basic skills. Enter Coding Dojo, a 3.5 month Jump start.
<br />
My interest in computer science started like a lot of others, I grew up playing video games. I wanted to know what made them tick. My curiosity led me to read more about programming to better understand how the software itself worked. I started taking online programming courses, and I was fascinated by how coding can teach me to think deeper, and allow me to utilize my creativity.
<br />
After teaching myself to code for a three months, I decided to join Coding Dojo bootcamp to gain the opportunity to work on dev teams, collaborate with others, and to help other students, I learned 3 full stacks within 3 months (Python, MERN, and JAVA), and built many projects using different technologies.
<br />
                        <h3>SKILL SETS</h3>

LANGUAGES: JavaScript(ES6), JAVA, Python, CSS, HTML
FRONT END: React, jQuery, AJAX, JSON, RESTful APIs, Bootstrap, Materialize, React-Carousel, React-Spring, React-Multer, React-MaterialUI
BACK END: Node.js, Django, Flask, Rails, AWS, Socket.io, OOP
DATABASES: SQL (MySQL, SQLite), NoSQL (MongoDB), Django ORM
<br />
                        <br />
                        <a href="https://github.com/phellwege"><LoopTrue />GitHub</a>
                        <br />
                        <a href="http://linkedin.com/in/peter-hellwege"><LinkedinLoop />Linkedin</a>
                        <br />
                        <p id="quote">
                            “The Purpose of software engineering is to control complexity, not to create it.”
</p>-- Pamela Have
<br />
                    </p>
                </div>
            </div>
            <BottomFooter />
        </>
    )
}
export default About;