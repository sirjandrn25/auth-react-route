import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseAuthContext } from '../store/authContext'
import Button from './UI/Button'

const Navbar = () => {
  const base_class = 'text-lg font-medium text-gray-200'
  const active_class = 'text-white text-lg font-medium '
  const { isLoggedIn, logoutHandler } = UseAuthContext()

  return (
    <nav className='p-5 flex flex-row items-center justify-around fixed top-0 left-0 right-0  w-screen bg-purple-600 shadow '>
      <div className='text-3xl font-bold'>React Auth</div>
      <ul className='flex flex-row items-center '>
        <li className='mx-3'>
          <NavLink to='/' className={({ isActive }) => (isActive ? active_class : base_class)}>
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <li className='mx-3'>
            <NavLink to='/auth' className={({ isActive }) => (isActive ? active_class : base_class)}>
              Login
            </NavLink>
          </li>
        )}

        {isLoggedIn && (
          <li className='mx-3'>
            <NavLink to='/profile' className={({ isActive }) => (isActive ? active_class : base_class)}>
              Profile{' '}
            </NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li className='mx-3'>
            <Button onClick={logoutHandler} className='bg-yellow-400 hover:bg-yellow-600'>
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
