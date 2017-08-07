import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

class App extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className='container'>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
