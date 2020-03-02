import React, { Component, createRef } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { Sticky } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  contextRef = createRef()

  render() {

    return (
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <Navbar />
        </Sticky>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          {/* <Route exact path='/search-results' component={SearchResults}></Route> */}
        </Switch>
      </div>
    )
  }
}

export default App
