import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
// import css from'./App.css'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Main /> */}
        <Route exact path='/' component={ Main } />
        {/* <Route exact path='/sell' component={ AdCreateFormContainer } /> */}
        {/* <Route path="/advertisement/:id" component = {AdDetailsContainer} /> */}
      </Provider>
    );
  }
}

export default App