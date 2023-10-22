import React from 'react'
import HeroSlider from './HeroSlider'

const Hero = () => {
    return (
        <div className=''>

            <div className='row'>
                <div className='col-lg-6 col-xl-6'>
                <div id="sentence-wrapper">
                <h2 className="sentence">
                    <span className='eventece'>Eventec é  </span>
                    <div className="words words-1">
                        <span>Fatec</span>
                        <span>Certificados</span>
                        <span>Eventos</span>
                        <span>Conhecimento</span>
                        <span>Networking</span>
                        <span>Tudo.</span>
                    </div>
                </h2>
                <p className='eventecDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi velit, auctor sed ante vel, eleifend dignissim nunc. Quisque dignissim scelerisque mi quis venenatis. Sed vitae lacus at mi hendrerit efficitur. Nam porta semper venenatis. In hac habitasse platea dictumst. Nulla volutpat purus ut lectus suscipit, quis tincidunt neque sodales. Curabitur lacinia sed mi non gravida. Fusce a dignissim eros, eu convallis tortor.</p>
               
               <div className='row heroBtns'>
                <div className='col-3'>
                <button className='btn btn-outline-primary btn-lg'>
                            Conheça mais
                        </button>
                </div>
                <div className='col-3'>
                <button className='btn  btn-outline-danger btn-lg'>
                            Cadastrar-se
                        </button> 
                </div>
              
                </div>

              
            </div>
                </div>
                <div className='col-lg-6 col-xl-6'>
                <div className='animatedImages'>
                <HeroSlider />
                <div className="secondSlider">
                <HeroSlider />
                </div>
            </div>
                </div>
            </div>






        </div>
        
    )
}

export default Hero