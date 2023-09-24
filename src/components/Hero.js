import React from 'react'
import HeroSlider from './HeroSlider'

const Hero = () => {
    return (
        <div className='heroMainContent'>
            <div className='heroMessage'>
                <h1>
                    Eventec Eventec
                    Eventec Eventec
                    Eventec Eventec
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi velit, auctor sed ante vel, eleifend dignissim nunc. Quisque dignissim scelerisque mi quis venenatis. Sed vitae lacus at mi hendrerit efficitur. Nam porta semper venenatis. In hac habitasse platea dictumst. Nulla volutpat purus ut lectus suscipit, quis tincidunt neque sodales. Curabitur lacinia sed mi non gravida. Fusce a dignissim eros, eu convallis tortor.</p>


                <div className='heroBtns'>
                    <button className='btnRedirectLoginPage'>
                        Conheça mais
                    </button>

                    <button className='btnRedirectLoginPage'>
                        Cadastrar-se
                    </button>
                </div>
            </div>





            <div className='animatedImages'>
                <HeroSlider />
                <HeroSlider />
            </div>







        </div>
    )
}

export default Hero