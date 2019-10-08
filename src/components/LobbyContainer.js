import React from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'

class LobbyContainer extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
    <Lobby 
    user={this.props.user}
    // rooms={this.props.rooms}
    />
    )
  }
}

function mapStateToProps (state) {
  return { 
      user: state.user,
    //   rooms: state.rooms
    }
}

export default connect(mapStateToProps)(LobbyContainer)