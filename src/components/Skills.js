import React from 'react';
import './component.scss';
import SkillImg from '../assets/images/dude.png'
import ReduxLogo from '../assets/images/redux-logo-black-and-white.png'

const Skills = () => {
    const skillIcons = [
        {
            icons: <i className="fab fa-html5"/>,
            skillText: "HTML5"
        },
        {
            icons: <i className="fab fa-css3-alt"/>,
            skillText: "CSS3"
        },
        {
            icons: <i className="fab fa-js-square"/>,
            skillText: "JavaScript"
        },
        {
            icons: <i className="fab fa-react"/>,
            skillText: "React"
        },
        {
            icons: <i className="fab fa-bootstrap"/>,
            skillText: "Bootstrap"
        },
        {
            icons: <img className={"ReduxIcon"} height={"100px"} width={"100px"} src={ReduxLogo}/>,
            skillText: "Redux"
        },

    ]
    return (
        <div className={"container-fluid SkillsContainer"}>
            <div className="row" style={{justifyContent: "center"}}>
                <h1>My <span>Skills</span></h1>
                <div className="SkillsContent mt-5">
                    <div className="col-6">
                        <div className={"SkillsImage"}>
                            <img src={SkillImg} alt=""/>
                        </div>
                    </div>
                    <div className="col-6 m-auto">
                        <div className={"SkillsIcon"}>
                            {skillIcons.map(item => <div>{item.icons}<span
                                className={"showText"}>{item.skillText}</span></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;