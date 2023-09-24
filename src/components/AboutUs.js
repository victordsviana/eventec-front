import React from 'react'
import AboutUsSlot from './AboutUsSlot'

const AboutUs = () => {
  return (
    <div id='aboutUsId' className='aboutUsContainer'>
        <div>
            <h4>Sobre nós</h4>
            <h1>Lorem Ipsum Eventec lorem ipsum</h1>
            <p>Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum</p>
        </div>

        <div className='slotContainer'>
            <AboutUsSlot/>
            <AboutUsSlot/>
            <AboutUsSlot/>
        </div>

        <div className='aboutUsBtnsBox'>
            <button className='getStartedBtn'>Vamos começar</button>
            <button className='learnMoreBtn'>Conheça mais > </button>
        </div>
    </div>
  )
}

export default AboutUs