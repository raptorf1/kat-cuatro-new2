import React from 'react'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {

  return (
    <List
      horizontal
      style={{ 'paddingLeft': '2rem', 'backgroundColor': 'black', 'display': 'block' }}
    >
      <List.Item
        as={Link}
        to='/'
        onClick={() => props.dispatch({ type: 'CHANGE_AUTH' })}
        style={{ 'display': props.userIn === false && 'none', 'fontWeight': 'bolder', 'fontSize': 'small', 'color': 'red' }}
      >
        Logout
      </List.Item>
      <List.Item
        as={Link}
        to={props.userIn === true ? '/calculator' : '/'}
        style={{ 'fontWeight': 'bolder', 'fontSize': 'x-large' }}
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
