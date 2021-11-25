import React from 'react';
import './component.scss';

const MyEducation = () => {
    return (
        <div className={"container-fluid MyEducation"}>
            <div className="row">
                <div className="col-12 MyEducationContent">
                    <h1>My <span>Education</span></h1>
                    <div className={"row ContentItem"}>

                        <div className="col-6 border-right">
                            <div className={"Study"}>
                                <div className={"StudyIcon"}><i className="fas fa-user-graduate"/></div>
                                <span>B.Tech Degree</span>
                                <p>2017-2021</p>
                                <p>University Institute Of Technology,RGPV In Automobile Stream</p>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className={"Study"}>
                                <div className={"StudyIcon"}><i className="fas fa-school"/></div>
                                <span>Higher Secondary Education</span>
                                <p>2016-2017</p>
                                <p>Green Valley Senior Sec School Bhopal In PCM Stream</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;