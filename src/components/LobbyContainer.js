import React from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { fetchGalaxies, updateStats } from '../actions/actions'
import Login from './Login'
import { url } from '../constants/url'

class LobbyContainer extends React.Component {

  mainSource = new EventSource(`${url}/stream`);
  gameSource = new EventSource(`${url}/gameStream/room/${this.props.roomId}`);

  componentDidMount() {
    //getting all galaxies with mainSource
    this.mainSource.onmessage = event => {
      const galaxies = JSON.parse(event.data);
      this.props.fetchGalaxies(galaxies);
    }

    this.gameSource.onmessage = event => {
      //event.data is a galaxy object
      const galaxy = JSON.parse(event.data);
      console.log('what is galaxy from gameSource?', galaxy)
      if(galaxy !== null && galaxy.length > 0) {
        this.props.updateStats(galaxy);
      }
    }
  }

  render() {
    if(!this.props.roomStatus) {
      return (
        <h3>Loading...</h3>
      )
    }
    if(!this.props.token) {
      return (
        <Login />
      )
    }
    if(this.props.token) {
      return (
        <Lobby />
      )
    }
  }
}

function mapStateToProps (state) {
  return {       
      token: state.user.jwt,
      username: state.user.username,
      galaxies: state.galaxies,
      roomStatus: state.galaxy.status,
      roomId: state.galaxy.id,
      playerId: state.galaxy.id
    }
}

export default connect(mapStateToProps, { fetchGalaxies, updateStats })(LobbyContainer)