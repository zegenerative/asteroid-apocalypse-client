import React from 'react'
// import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import SignUpContainer from './SignUpContainer'

export default class Lobby extends React.Component {
    
    render() {
        const { user } = this.props
        if(user) {
            return(
                <div>
                    <h1>Choose a room!</h1>
                </div>
            )
        } else {
            return(
                <div>
                    <SignUpContainer />
                    <LoginFormContainer />
                </div>
            )
        }
    }
}
