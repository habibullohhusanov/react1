import React from 'react'
import Input from '../components/UI/jsx/input'
import Button from '../components/UI/jsx/button'

function Login() {
  return (
    <div>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Log in</Button>
    </div>
  )
}

export default Login