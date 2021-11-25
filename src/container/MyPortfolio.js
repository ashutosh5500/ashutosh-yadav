import React, {Fragment} from 'react';
import Intro from "../components/Intro";
import MyEducation from "../components/MyEducation";
import Skills from "../components/Skills";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MyPortfolio = () => {
    return (
        <Fragment>
            <Intro/>
            <MyEducation/>
            <Skills/>
            <Hobbies/>
            <Contact/>
            <Footer/>
        </Fragment>


    );
};

export default MyPortfolio;