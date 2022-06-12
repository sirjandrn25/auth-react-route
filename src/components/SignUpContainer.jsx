import React from 'react'
import InputField from './UI/InputField'
import Button from './UI/Button'
import Card from './UI/Card'
import { signUpRequest } from '../lib/api'

const SignUpContainer = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim())
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await signUpRequest({
        email,
        password,
        returnSecureToken: true,
      })
    } catch (error) {
      console.log(error)
      alert(error.error.message)
    }

    // console.log(data)
    // setEmail('')
    // setPassword('')
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

        <Button className='bg-purple-600 w-[120px] hover:bg-purple-700 '>Register</Button>
      </form>
    </>
  )
}

export default SignUpContainer
