import React from 'react'
import LoginContainer from '../components/LoginContainer'
import SignUpContainer from '../components/SignUpContainer'
import Card from '../components/UI/Card'

const Auth = () => {
  const [isLoginUi, setIsLoginUi] = React.useState(true)
  return (
    <Card className='bg-white flex flex-col justify-center items-center w-[500px]'>
      {isLoginUi && <LoginContainer />}
      {!isLoginUi && <SignUpContainer />}

      <span onClick={(e) => setIsLoginUi((prevState) => !prevState)} className='text-sky-600 cursor-pointer'>
        {isLoginUi ? 'Do you want to create an account?' : 'switch to login'}
      </span>
    </Card>
  )
}

export default Auth
