import { Link } from '@reach/router';
import linkedin from '../static/linkedin.png';
import github from '../static/github.png';
import "../BottomFooter.css";

const BottomFooter = () => {
    return (
        <footer id="footer_wrap">
            <div id="job_links">
                <a href="https://github.com/phellwege"><img id="logo1" src={github} alt="logo"/>Github</a>
                <a href="http://linkedin.com/in/peter-hellwege"><img id="logo2" src={linkedin} alt="logo"/>Linkedin</a>
            </div>
                <div id="footer_links">
                    <Link to={"/"}>Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
        </footer>
    )
}
export default BottomFooter;