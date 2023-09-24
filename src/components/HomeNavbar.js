import React from 'react'
import LogoImg from '../static/Logo.svg'
import "./style/global.css"

const HomeNavbar = () => {
  return (
    <nav className='homeNavbar'>
      <div className='logoNavbar'>
        <img src={LogoImg} alt="Logo" />
      </div>

      <div className='anchorItems'>

        <a href='#aboutUsId'>
          <h3>Sobre nós</h3>
        </a>
        <a href='/'>
          <h3>Eventos</h3>
        </a>
        <a href='#teamId'>
          <h3>Nossa equipe</h3>
        </a>
      </div>

      <a href='/'>
        <button className='btnRedirectLoginPage'>
          Login
        </button>
      </a>
    </nav>
  )
}

export default HomeNavbar