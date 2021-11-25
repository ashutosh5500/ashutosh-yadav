import React from 'react';

const Contact = () => {
    const contactIcon = [
        {
            icons: <i className="fa-regular fa-envelope-open"/>,
            contactLink: "mailto:yashutosh991@gmail.com"
        },
        {
            icons: <i className="fa-brands fa-github"/>,
            contactLink: "https://github.com/ashutosh5500"
        },
        {
            icons: <i className="fa-brands fa-linkedin"/>,
            contactLink: "https://www.linkedin.com/in/ashutoshyadav3949aa1b3/"
        },
    ]
    return (
        <div className={"container-fluid HobbiesContainer"}>
            <div className="row" style={{justifyContent: "center", padding: "50px 0px"}}>
                <h1>Contact <span>Me</span></h1>
                <div className="HobbiesContent mt-5">
                    <div className="sm-col-12 w-100">
                        <div className={"HobbiesIcon"}>
                            {contactIcon.map(item => <a style={{color: "#fff"}} href={item.contactLink}
                                                        target={"_blank"}>{item.icons}</a>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;