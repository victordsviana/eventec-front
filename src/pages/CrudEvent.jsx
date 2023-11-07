import React from 'react'
import ShowEvents from '../components/ShowEvents';
import CreateEvents from '../components/CreateEvents';
import LoggedNavbar from './LoggedNavbar';
import Footer from '../components/Footer';

const CrudEvent = () => {
  return (
    
    <><LoggedNavbar />
    <div className="container-bg">
    <div className='container'>
        <div className="row">
            <div className="col"><ShowEvents/></div>
            <div className="col"><CreateEvents/></div>
        </div>
    </div>
    </div>
    <Footer/>
   </>

  )
}

export default CrudEvent