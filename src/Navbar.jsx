import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <List horizontal>
      <List.Item
        as={Link}
        to='/calculator'
      >
        Calculator
        </List.Item>
    </List>
  )
}

export default Navbar
