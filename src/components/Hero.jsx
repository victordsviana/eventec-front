import React from 'react'

const Hero = () => {
    return (
        <div className=''>

            <div className='hero row'>
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

                        <div className='container heroBtns'>

                            <div class="d-grid gap-3 d-md-flex  justify-content-start">
                                <button class="btn btn-lg btn-outline-primary" type="button">Conheça mais</button>
                                <button class="btn btn-lg btn-outline-danger" type="button">Cadastrar-se</button>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='col-lg-6 col-xl-6'>
                    <div className='animatedImages'>


                    </div>
                </div>
            </div>






        </div>

    )
}

export default Hero