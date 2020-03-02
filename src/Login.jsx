import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form>
      <Form.Field>
        <input
          placeholder='Username'
          required={true}
          onChange={(e) => setUsername(e.target.value)}
        //  onKeyPress={e => { e.key === 'Enter' && logInUser() }}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder='Password'
          type='password'
          required={true}
          onChange={(e) => setPassword(e.target.value)}
          //  onKeyPress={e => { e.key === 'Enter' && logInUser() }}
        />
      </Form.Field>
      <Button>Login</Button>
    </Form>
  )
}

export default Login
