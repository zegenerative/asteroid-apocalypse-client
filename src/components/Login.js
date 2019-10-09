import React, { Component } from 'react'
import SignUpContainer from './SignUpContainer'
import LoginFormContainer from './LoginFormContainer'

export default class Login extends Component {
    render() {
        return (
            <div>
                <SignUpContainer />
                <LoginFormContainer />
            </div>
        )
    }
}
