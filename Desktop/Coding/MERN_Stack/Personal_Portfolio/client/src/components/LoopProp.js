import logo from '../static/github.png';
import { useSpring, animated } from 'react-spring';

function LoopTrue() {
    const styles = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 359 },
        config: {mass: 6, tension: 200, friction: 80},
    })

    return (
                <animated.img 
                src={logo} 
                style={{
                    height:50, 
                    width:50, 
                    margin: "5px",
                    borderRadius: "50%",
                    ...styles
                }}/>
    )}
export default LoopTrue

