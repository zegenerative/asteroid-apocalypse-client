import React from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { getGalaxies } from '../actions/actions'

class LobbyContainer extends React.Component {
  componentDidMount() {
    this.props.getGalaxies()
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

export default connect(mapStateToProps, { getGalaxies })(LobbyContainer)