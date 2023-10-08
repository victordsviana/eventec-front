import React from 'react'
import HomeNavbar from '../components/HomeNavbar';
import ShowEvents from '../components/ShowEvents';
import CreateEvents from '../components/CreateEvents';

const CrudEvent = () => {
  return (
    
    <><HomeNavbar />
    <div className='container'>
        <div className="row">
            <div className="col"><ShowEvents/></div>
            <div className="col"><CreateEvents/></div>
        </div>
    </div>
   </>

  )
}

export default CrudEvent