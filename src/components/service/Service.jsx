import React, { useState } from 'react'
import "./Service.css"

function Service() {
    const[toggleState,setToggleState]=useState(0);
    const toggleTab = (index)=>{
        setToggleState(index)
    }
return (
    <div className='services section' id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>
        <div className="services__container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web page</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i
                            onClick={() => toggleTab(0)}
                            className="uil uil-times services__modal-close"
                        ></i>
                        <h3 className="services__modal-title">Senior Web Developer</h3>
                        <p className="services__modal-description">
                            Delivering robust, scalable, and maintainable web solutions with a focus on performance and user experience.
                        </p>
                        <ul className="service__modal-services grid">
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Architected and implemented complex user interfaces using modern frameworks.
                                </p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Led end-to-end web application development, from design to deployment.
                                </p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Ensured code quality, scalability, and maintainability through best practices.
                                </p>
                            </li>
                            <li className="services__modal-services">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Delivered highly responsive and accessible web experiences.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Service
