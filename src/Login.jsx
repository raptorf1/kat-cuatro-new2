import React, { useState } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'

const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorDisplay, setErrorDisplay] = useState(false)
  const [errors, setErrors] = useState([])

  const correctUsername = 'test'
  const correctPassword = 'test'

  const login = () => {
    if (username === correctUsername && password === correctPassword) {
      localStorage.setItem(`user ${correctUsername}`, Date.now())
      props.history.push('/calculator')
    } else {
      setErrors(['Invalid login credentials'])
      setErrorDisplay(true)
    }
  }

  return (
    <>
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
          onSubmit={() => login()}
        >
          Login
      </Button>
      </Form>
      {errorDisplay &&
        <Message negative style={{ 'textAlign': 'center' }} >
          {errors}
        </Message>
      }
    </>
  )
}

export default Login
