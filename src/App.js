import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import LobbyContainer from './components/LobbyContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={ LobbyContainer } />
      </Provider>
    );
  }
}

export default App