import React from 'react';
import './component.scss'

const Footer = () => {
    return (
        <div className={"Footer"}>
            <div><i className="fa-solid fa-phone"/><span>(+91) 8959109354</span></div>
            <button><a href="https://drive.google.com/file/d/15DpGUAJgec-H7KPiRvLgtB0m4b95lANa/view?usp=sharing">Download
                CV <i className="fa-solid fa-download"/></a></button>
        </div>
    );
};

export default Footer;