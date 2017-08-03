import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './Components/Home/Home.js'

class App extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
