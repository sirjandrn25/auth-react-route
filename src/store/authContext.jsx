import React, { useEffect, useState } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  loginHandler: () => {},
  logoutHandler: () => {},
})

let interval

const calculateRemainingTime = () => {
  const curr_time = new Date().getTime()
  const expirationTime = localStorage.getItem('expirationTime')
  const remainingTime = +expirationTime - curr_time
  return remainingTime
}

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null)

  const isLoggedIn = !!token
  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('expirationTime')
    clearInterval(interval)
  }
  useEffect(() => {
    const store_token = localStorage.getItem('token')

    if (store_token) {
      const remainingTime = calculateRemainingTime()

      if (remainingTime > 0) {
        interval = setTimeout(logoutHandler, remainingTime)
      } else {
        logoutHandler()
      }
    }

    setToken(store_token)
    return () => clearInterval(interval)
  }, [])

  const loginHandler = (new_token, expirationTime) => {
    setToken(new_token)

    localStorage.setItem('token', token)
    localStorage.setItem('expirationTime', expirationTime)
    const remainingTime = calculateRemainingTime()
    console.log(remainingTime)
    interval = setTimeout(logoutHandler, remainingTime)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginHandler, logoutHandler }}>{props.children}</AuthContext.Provider>
  )
}

export const UseAuthContext = () => React.useContext(AuthContext)

export default AuthContext
