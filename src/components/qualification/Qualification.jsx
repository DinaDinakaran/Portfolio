import React, { useState } from 'react'
import "./Qualification.css"
function Qualification() {
    const[toggleState,setToggleState]=useState(1);
    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <div className='qualification section'>
       <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey </span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState===1 
                ? "qualification__button qualification__active button--flex"
                :"qualification__button  button--flex"
            } onClick={()=>toggleTab(1)} >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div className={toggleState===2 
                ? "qualification__button qualification__active button--flex"
                :"qualification__button  button--flex"
            } onClick={()=>toggleTab(2) }>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
             <div className="qualification__sections">
                <div className={toggleState===1 
                ? "qualification__content qualification__content-active "
                :"qualification__content"
            }>

                     <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                             <h3 className="qualification__title">AI&ML Engineer</h3>
                            <span className="qualification__subtitle">GUVI geek network private Ltd</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "} feb-2025 to present

                            </div>
                        </div>
                       
                        <div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">GUVI geek network private Ltd</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> {" "} dec-2021 to june 2022

                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                             <h3 className="qualification__title"> Bachelor Of Engineering</h3>
                            <span className="qualification__subtitle">Nandha Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}june-2018 to may-2021

                            </div>
                        </div>
                       
                        <div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        
                       

                        <div>
                             <h3 className="qualification__title"> Diploma</h3>
                            <span className="qualification__subtitle">Bhavani Polytechnic college</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}june-2014 to may-2017

                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className={toggleState===2 
                ? "qualification__content qualification__content-active "
                :"qualification__content"
            }>
                 <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Lead Engineer</h3>
                            <span className="qualification__subtitle">HCLTech chennai (Paypal Clint)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "} august-2025 to present

                            </div>
                        </div>
                      
                        <div>
                        </div>
                    </div>
                  <div className="qualification__data">
                      <div>
                            <h3 className="qualification__title"> Senior Software Engineer & Front-end Lead</h3>
                            <span className="qualification__subtitle">Bipolar Factory Private Limited</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}Oct-2023 to jul-2025

                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Software Engineer</h3>
                            <span className="qualification__subtitle">Bipolar Factory Private Limited</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}oct-2023 to sep 2024

                            </div>
                        </div>
                      
                        <div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">AppHUB Technologies LLP</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{"  "}sep-2022 to june 2023

                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Application Engineer</h3>
                            <span className="qualification__subtitle">Ccube Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}june-2021 to june 2022

                            </div>
                        </div>
                      
                        <div>
                        </div>
                    </div>

                </div> 
             </div>
        </div>
    </div>
  )
}

export default Qualification
