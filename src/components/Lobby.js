import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormContainer from './LoginFormContainer'
import SignUpContainer from './SignUpContainer'
import CreateRoomContainer from './CreateRoomContainer'

export default class Lobby extends React.Component {
    
    render() {
        const { user } = this.props
        if(user) {
            return(
                <div>
                    <h1>Choose a room!</h1>
                    <CreateRoomContainer />
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
