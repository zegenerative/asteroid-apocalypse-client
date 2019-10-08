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
    galaxies={this.props.galaxies}
    />
    )
  }
}

function mapStateToProps (state) {
  return { 
      user: state.user,
      galaxies: state.galaxies
    }
}

export default connect(mapStateToProps)(LobbyContainer)