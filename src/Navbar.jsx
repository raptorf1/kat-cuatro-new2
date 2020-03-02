import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <List horizontal>
      <List.Item
        as={Link}
        to='/'
        onClick={() => props.dispatch({ type: 'CHANGE_AUTH' })}
        style={{'display': props.userIn === false && 'none'}}
      >
        Logout
      </List.Item>
      <List.Item
        as={Link}
        to={props.userIn === true ? '/calculator' : '/'}
      >
        Calculator
      </List.Item>
    </List>
  )
}

const mapStateToProps = (state) => {
  return { userIn: state.auth.userLoggedIn }
}

export default connect(mapStateToProps)(Navbar)
