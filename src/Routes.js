import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Homepage from './pages/Homepage';
import MyAccount from './pages/MyAccount'
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signinup' element={<SignInUp/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/myAccount' element={<MyAccount/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;