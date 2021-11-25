import React from 'react';
import './component.scss'
import Logo from '../assets/images/image.svg'
import '../index.css'
import IntroContent from "./IntroContent";

const Intro = () => {
    return (
        <div className="video-container">
            <video muted autoPlay loop>
                <source type="video/mp4" src="video.mp4"/>
            </video>
            <div className={"IntroContent"}>
                <IntroContent/>
            </div>
        </div>
    );
};

export default Intro;