import React from 'react'
import slotImage from '../assets/images/gratis.png'
const AboutUsSlot = () => {
  return (
    <div>
        <img src={slotImage} width='180px' height='180px' alt=''/>
        <h2>Gratuito</h2>
        <p>O Eventec é, e sempre será <b>gratuito</b>. Jamais cobraremos pelos nossos serviços</p>
    </div>
  )
}

export default AboutUsSlot