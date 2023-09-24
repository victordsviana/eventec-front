import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import Homepage from './pages/Homepage';
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/signinup' element={<SignInUp/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;