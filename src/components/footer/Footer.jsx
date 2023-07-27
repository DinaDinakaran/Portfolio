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
        <a href="https://www.facebook.com/people/Dina-Dinakaran/pfbid0PREGpfSsV7MMowGZpB5tNcCEiXN2aG7265wCD9GMPkhygAg1mNRbMsMaPs1TPPJYl/" target='_blank' className="footer__social-link">
      <i className="bx bxl-facebook"></i>
      </a>

      <a href="https://www.instagram.com/mental_mechanicfor_you/" target='_blank' className="footer__social-link">
        <i className="bx bxl-instagram"></i>
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
