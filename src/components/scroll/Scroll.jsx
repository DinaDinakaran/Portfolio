import React from 'react'
import "./scroll.css"

function Scroll() { 
  window.addEventListener("scroll",function(){
    const scrollUp = document.querySelector(".scrollup");
    if(this.scrollY>=560){
      scrollUp.classList.add('show-scroll')
    }else{
      scrollUp.classList.remove('show-scroll')
    }
  })
  return (
    <a href='#' className='scrollup'>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scroll
