import React, { useState } from 'react'
import "./Header.css"

function Header() {
    const [toggle,setToggle] = useState(false)
  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Dinakaran</a>

        <div className={toggle ? "nav__menu show-menu":"nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link active__link ">
                        <i className="uil uil-estate nav_icon"></i>Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav_icon"></i>About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav_icon"></i>Skills
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav_icon"></i>Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav_icon"></i>Project
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav_icon"></i>Conatact
                    </a>
                </li>
               
            </ul>
            <i className="uil uil-times nav__close" onClick={()=> setToggle(!toggle) } ></i>
        </div>


        <div className="nav__toggle" onClick={()=> setToggle(!toggle) }>
            <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
