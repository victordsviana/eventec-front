import React from 'react'
import LogoImg from '../static/Logo.svg'
import VoltarImg from '../static/Voltar.svg'
import "./header.css"

const HeaderEventec = () => {
    return (
        <div className="col">
            <div className="top-bar-container">
                <a href="/"><img src={VoltarImg} alt="Voltar"/></a>
                <img src={LogoImg} alt="Logo"/>
            </div>
        </div>
    )
}

export default HeaderEventec