import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Logo from "../components/Logo";
import BottomFooter from "../components/BottomFooter";
import "../Contact.css";
import MapContainer from '../components/GoogleMaps';
import LoopTrue from '../components/LoopProp';
import LinkedinLoop from '../components/LinkedinLoop';
init("user_hOa8mddjJS2F9fVd2mfLC");

function Contact() {
    return (
        <>
            <Logo />
            <div class="full_page_wrap">
                <div class="page_wrapper">
                    <div id="form_wrapper">
                        <h2>Contact Me</h2>
                        <form target="_blank" action="https://formsubmit.co/phellwege1@gmail.com" method="POST">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col">
                                        <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                                    </div>
                                    <div class="col">
                                        <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                        </form></div>
                    <div id="text_wrapper">
                        <h3>Feel free to reach out!</h3>
                        <p> This form is for general inquiries, and to establish contact. Please do not submit any form of sensitive information.</p>
                        <h3>Where am I located?</h3>
                        <p> I'm currently Located in scenic Boise Idaho, but I would be more than happy to work remotely on your behalf. </p>
                        <br />
                        <h3>You're also welcome to contact me here!</h3>
                        <div id="line_break"></div>
                        <a href="https://github.com/phellwege"><LoopTrue />GitHub</a>
                        <div id="line_break"></div>
                        <a href="http://linkedin.com/in/peter-hellwege"><LinkedinLoop />Linkedin</a>
                        <br />
                    </div>
                </div>
                <div class="google_maps">
                    <MapContainer />
                </div>
            </div>
            <BottomFooter />
        </>
    )
}
export default Contact