import React from 'react'

import Layout from './components/Layout'
import { Outlet, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import { UseAuthContext } from './store/authContext'

const App = () => {
  const { isLoggedIn } = UseAuthContext()
  const navigate = useNavigate()
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        {!isLoggedIn ? <Route path='auth' element={<Auth />} /> : navigate('/')}

        {isLoggedIn ? <Route path='profile' element={<Profile />} /> : navigate('/login')}

        <Route path='*' element={<div>404 page not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
