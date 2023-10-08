import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Homepage from './pages/Homepage';
import MyAccount from './pages/MyAccount'
import Eventpage from './pages/Eventpage';
import CrudEvent from './pages/CrudEvent';
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signinup' element={<SignInUp/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/myAccount' element={<MyAccount/>}></Route>
            <Route path='/events' element={<Eventpage/>}></Route>
            <Route path='/crudevent' element={<CrudEvent/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;