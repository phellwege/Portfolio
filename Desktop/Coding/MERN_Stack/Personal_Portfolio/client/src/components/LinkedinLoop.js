import logo2 from '../static/linkedin.png'
import { useSpring, animated } from 'react-spring';

function LinkedinLoop() {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 359 },
        config: {mass: 6, tension: 200, friction: 80},
    })

    return (
                <animated.img 
                src={logo2} 
                style={{
                    height:50, 
                    width:50, 
                    margin: "5px",
                    borderRadius: "15%",
                    ...styles
                }}/>
    )}
export default LinkedinLoop