import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Dinakaran</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>
            <li>
                <a href="#contact" className="footer__link">Contact</a>
            </li>
        </ul>
        <div className="footer__social">
      <a href="https://www.linkedin.com/in/dinakaran-v-97807b17a" target='_blank' className="footer__social-link">
      <i class="uil uil-linkedin-alt"></i>
      </a>
      <a href="https://medium.com/@dinadinakaran143" target='_blank' className="footer__social-link">
      <i class="uil uil-medium-m"></i>
      </a>
        </div>
        <span className="footer__copy">
            &#169;dinakaran .All rights reserved
        </span>
      </div>
    </div>
  )
}

export default Footer
