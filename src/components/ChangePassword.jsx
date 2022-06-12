import React from 'react'
import InputField from './UI/InputField'
import Card from './UI/Card'
import Button from './UI/Button'

const ChangePassword = () => {
  const [password, setPassword] = React.useState('')
  const handlePasswordChange = (e) => {
    setPassword(e.target.value.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Card className='flex justify-center items-center bg-white w-[400px]'>
      <form action='' onSubmit={handleSubmit} className='w-full'>
        <InputField
          value={password}
          onChange={handlePasswordChange}
          label='Enter New Password'
          placeholder='enter strong password'
          className='my-5'
        />
        <Button className='bg-purple-600'>Change Password</Button>
      </form>
    </Card>
  )
}

export default ChangePassword
