import React, { useState } from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [token, setToken] = useState(null)

  const logout = () => {
    setToken('')
    localStorage.clear()
  }

  return (
    <List horizontal>
      <List.Item
        as={Link}
        to='/'
        onClick={() => logout()}
      >
        Logout
      </List.Item>
      <List.Item
        as={Link}
        onClick={() => { setToken(localStorage.getItem('user')) }}
        to={token === null ? '/' : '/calculator'}
      >
        Calculator
      </List.Item>
    </List>
  )
}

export default Navbar
