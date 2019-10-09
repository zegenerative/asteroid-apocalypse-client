import React from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { getGalaxies } from '../actions/actions'

class LobbyContainer extends React.Component {
  componentDidMount() {
    this.props.getGalaxies() // we should be logged in for this
  }

  render() {
    return (
    <Lobby 
    token={this.props.token}
    username={this.props.username}
    galaxies={this.props.galaxies}
    />
    )
  }
}

function mapStateToProps (state) {
  return { 
      token: state.user.jwt,
      username: state.user.username,
      galaxies: state.galaxies,
    }
}

export default connect(mapStateToProps, { getGalaxies })(LobbyContainer)