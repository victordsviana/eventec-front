import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Homepage from './pages/Homepage';
import MyAccount from './pages/MyAccount'
import CrudEvent from './pages/CrudEvent';
import AllEvents from './pages/AllEvents';
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signinup' element={<SignInUp/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/myAccount' element={<MyAccount/>}></Route>
            <Route path='/crudevent' element={<CrudEvent/>}></Route>
            <Route path='/events' element={<AllEvents/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;