import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import LobbyContainer from './components/LobbyContainer'
import GameEasyContainer from './components/GameEasyContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={ LobbyContainer } />
        <Route exact path='/game/:id' component={ GameEasyContainer } />
      </Provider>
    );
  }
}

export default App