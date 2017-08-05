import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore.js'
import Immutable from 'immutable'
import './semantic/semantic.min.css'

const store = configureStore(Immutable.Map())

ReactDOM.render(<App store={store} />, document.getElementById('root'))

registerServiceWorker()
