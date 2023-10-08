import React from 'react'
import "./style/heroSlider.css"
import heroHome1 from "../assets/heroImages/heroHome1.jfif"
import heroHome2 from "../assets/heroImages/heroHome2.jpeg"
import heroHome3 from "../assets/heroImages/heroHome3.png"
import heroHome4 from "../assets/heroImages/heroHome4.webp"
import heroHome5 from "../assets/heroImages/heroHome5.jpeg"
import heroHome6 from "../assets/heroImages/heroHome6.png"
import heroHome7 from "../assets/heroImages/heroHome7.webp"
import heroHome8 from "../assets/heroImages/heroHome8.png"
import heroHome9 from "../assets/heroImages/heroHome9.png"
import heroHome10 from "../assets/heroImages/heroHome10.png"


const HeroSlider = () => {
  return (
    <div className="slider">
    <div className="slide-track">
        <div className="slide">
            <img src={heroHome1} height="100" width="250" alt="1" />
        </div>
        <div className="slide">
            <img src={heroHome2} height="100" width="250" alt="2" />
        </div>
        <div className="slide">
            <img src={heroHome3} height="100" width="250" alt="3" />
        </div>
        <div className="slide">
            <img src={heroHome4} height="100" width="250" alt="4" />
        </div>
        <div className="slide">
            <img src={heroHome5} height="100" width="250" alt="5" />
        </div>
        <div className="slide">
            <img src={heroHome6} height="100" width="250" alt="6" />
        </div>
        <div className="slide">
            <img src={heroHome7} height="100" width="250" alt="7" />
        </div>
        <div className="slide">
            <img src={heroHome8} height="100" width="250" alt="8" />
        </div>
        <div className="slide">
            <img src={heroHome9} height="100" width="250" alt="9" />
        </div>
        <div className="slide">
            <img src={heroHome10} height="100" width="250" alt="10" />
        </div>
        <div className="slide">
            <img src={heroHome1} height="100" width="250" alt="11" />
        </div>
        <div className="slide">
            <img src={heroHome1} height="100" width="250" alt="12" />
        </div>
        <div className="slide">
            <img src={heroHome1} height="100" width="250" alt="13" />
        </div>
        <div className="slide">
            <img src={heroHome1} height="100" width="250" alt="14" />
        </div>
    </div>
</div>  )
}

export default HeroSlider