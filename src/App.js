import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import LobbyContainer from './components/LobbyContainer'
import GameEasyContainer from './components/GameEasyContainer'
import Login from './components/Login'
// import { connect } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/lobby' component={ LobbyContainer } />
        <Route exact path='/game/:id' component={ GameEasyContainer } />
        <Route exact path='/' component={Login}/>
      </Provider>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.user
//   }
// }

// export default connect(mapStateToProps)(App)