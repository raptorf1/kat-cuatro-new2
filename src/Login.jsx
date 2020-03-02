import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const correctUsername = 'test'
  const correctPassword = 'test'

  const login = () => {
    if (username === correctUsername && password === correctPassword) {
      props.history.push('/calculator')
    }
  }

  return (
    <Form>
      <Form.Field>
        <input
          placeholder='Username'
          required={true}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={e => { e.key === 'Enter' && login() }}
        />
      </Form.Field>
      <Form.Field>
        <input
          placeholder='Password'
          type='password'
          required={true}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={e => { e.key === 'Enter' && login() }}
        />
      </Form.Field>
      <Button
        onClick={() => login()}
      >
        Login
      </Button>
    </Form>
  )
}

export default Login
