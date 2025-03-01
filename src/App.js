import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import LobbyContainer from './components/LobbyContainer'
import GameContainer from './components/GameContainer'
import Login from './components/Login'
import WaitingRoom from './components/WaitingRoom'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/lobby' component={ LobbyContainer } />
        <Route exact path='/room/:id' component={ GameContainer } />
        <Route exact path='/room/:id/waitingroom' component={ WaitingRoom } />
        <Route exact path='/' component={ Login }/>
      </Provider>
    );
  }
}