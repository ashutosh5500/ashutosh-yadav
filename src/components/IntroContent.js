import {useEffect, useRef} from "react";
import Typed from "typed.js";
import './component.scss'

const IntroContent = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
               '<div><h1>Hi,</br>I am Ashutosh Yadav <p>Front-End-Developer</p></h1></div>'
            ],
            typeSpeed: 100,
            backSpeed: 100,
        };

        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        }
    }, [])

    return (
        <div className="wrap">
            <div className="video-container">
                <span style={{whiteSpace: 'pre'}} ref={el}/>
            </div>
        </div>
    );
}

export default IntroContent;
