import React from 'react'
import InputField from './UI/InputField'
import Button from './UI/Button'
import { signInRequest } from '../lib/api'
import { UseAuthContext } from '../store/authContext'

const LoginContainer = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { loginHandler } = UseAuthContext()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await signInRequest({ email, password, returnSecureToken: true })
      let expirationTime = parseInt(data.expiresIn) * 1000 + new Date().getTime()

      // console.log(expirationTime)
      loginHandler(data.idToken, expirationTime)
    } catch (error) {
      console.log('error occur')
      console.log(error)
      alert(error.error.message)
    }
  }
  return (
    <>
      <form action='' method='post' onSubmit={handleSubmit} className='w-[400px] p-5'>
        <InputField
          value={email}
          onChange={handleEmailChange}
          className='my-5'
          type='email'
          label='Email Address'
          placeholder='enter your email address'
          required={true}
        />
        <InputField
          value={password}
          onChange={handlePasswordChange}
          className='my-5'
          type='password'
          label='password'
          placeholder='enter your password'
          required={true}
        />

        <Button className='bg-teal-400 w-[120px] hover:bg-teal-500 '>Login</Button>
      </form>
    </>
  )
}

export default LoginContainer
