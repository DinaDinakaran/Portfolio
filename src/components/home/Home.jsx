import React from 'react'
import "./Home.css"
import SocialMedia from './SocialMedia'
import Data from './Data'
import ScrollDown from './ScrollDown'
function Home() {
  return (
    <section className="home section" id='home'>
        <div className="home__container container grid">
            <div className="home_content grid">
                <SocialMedia/>
                <div className="home__img"></div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Home
