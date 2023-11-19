import React from 'react'
import AboutUsSlot from './AboutUsSlot'
import AboutUsSlot2 from './AboutUsSlot2'
import AboutUsSlot3 from './AboutUsSlot3'

const AboutUs = () => {
  return (
    <div id='aboutUsId' className='container aboutUsContainer'>
        <div className='aboutText'>
            <h3><b style={{marginBottom: '30px'}}>Sobre o Eventec</b></h3>
            <h2 style={{marginBottom: '50px'}}>Gerenciamento de Eventos e Cursos para Fatecs</h2>
            <p style={{maxWidth: '1000px'}}>Sabemos o quanto o mercado de trabalho é acirrado, e sabemos também o quanto é importante ter um bom currículo e networking quando estamos saindo da faculdade para poder entrar com o pé direito no mercado. Dessa ideia, surgiu o Eventec: somos a plataforma oficial e gratuita desenvolvida para criação de eventos e cursos direcionados aos estudantes (e público externo) das Fatecs do estado de São Paulo.</p>
        </div>
            <h2 style={{marginBottom: '50px'}}>Por que utilizar o Eventec?</h2>

        <div className='row'>
          <div className="col-12 col-xl-4"><AboutUsSlot/></div>
          <div className="col-12 col-xl-4"><AboutUsSlot2/></div>
          <div className="col-12 col-xl-4"><AboutUsSlot3/></div>
            
            
            
        </div>
    </div>
  )
}

export default AboutUs