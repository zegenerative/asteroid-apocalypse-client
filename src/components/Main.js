import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
//import { connect } from 'react-redux'
import LoginFormContainer from './LoginFormContainer'
import SignUpContainer from './SignUpContainer'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>ASTEROID APOCALYPSE</h1>
                {/* <Route exact path='/' component={ } /> */}
                <SignUpContainer />
                <LoginFormContainer />
            </div>
        )
    }
}
