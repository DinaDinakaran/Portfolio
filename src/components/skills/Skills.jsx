import React from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import "./Skills.css"

function Skills() {
  return (
    <div className='skills section' id='skills'>
        <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <FrontEnd/>
         
        <BackEnd/>
      </div>
    </div>
  )
}

export default Skills
