import React from 'react';
import ReduxLogo from "../assets/images/images (1).png";

const Hobbies = () => {
    const hobbiesIcon = [
        {
            icons: <i className="fas fa-chess-knight"/>,
            skillText: "a bad chess player!"
        },
        {
            icons: <i className="far fa-futbol"/>,
            skillText: "a football fan!"
        },
        {
            icons: <img className={"PianoIcon"} height={"50px"} width={"50px"} src={ReduxLogo}/>,
            skillText: "like to play keyboard"
        },
        {
            icons: <i className="fa-solid fa-tv"/>,
            skillText: "TV shows & anime!"
        },
    ]

    return (
        <div className={"container-fluid HobbiesContainer"}>
            <div className="row" style={{justifyContent: "center"}}>
                <h1>My <span>Hobbies</span></h1>
                <div className="HobbiesContent mt-5">
                    <div className="sm-col-12 w-100">
                        <div className={"HobbiesIcon"}>
                            {hobbiesIcon.map(item => <div>{item.icons}<span
                                className={"showText"}>{item.skillText}</span></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;