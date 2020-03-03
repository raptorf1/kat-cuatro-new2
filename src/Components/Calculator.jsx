import React, { useEffect } from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Calculator = (props) => {

  useEffect(() => { props.userIn === false && props.history.push('/') })

  return (
    'calculator yay'
  )
}

const mapStateToProps = (state) => {
  return { userIn: state.auth.userLoggedIn }
}

export default connect(mapStateToProps)(Calculator)
