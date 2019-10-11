import React from 'react'
import { connect } from 'react-redux'
import Lobby from './Lobby'
import { fetchGalaxies, updateStats } from '../actions/actions'
import Login from './Login'
import WaitingRoom from './WaitingRoom'
import { Redirect } from 'react-router-dom'
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
    console.log('SOMETHING CHANGED IN THE WAITING ROOM', event.data)
    const galaxy = JSON.parse(event.data);
    if(galaxy !== null && event.data.length > 0) {
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
    } else if(this.props.roomStatus === 'empty' && this.props.token) {
      return (
        <div>
          <Lobby 
            token={this.props.token}
            username={this.props.username}
            galaxies={this.props.galaxies}
          />
        </div>
      )
    } else if(this.props.roomStatus === 'waiting' && this.props.token) {
      return (
        <WaitingRoom />
      )
    } else if(this.props.roomStatus === 'full' && this.props.token) {
      console.log('redirecting......')
      return (
        <Redirect to={`/room/${this.props.roomId}`}/>
      )
    } else if(this.props.roomStatus === 'done' && this.props.token) {
      return (
        <div>
          <Lobby 
            token={this.props.token}
            username={this.props.username}
            galaxies={this.props.galaxies}
          />
        </div>
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
      roomId: state.galaxy.id
    }
}

export default connect(mapStateToProps, { fetchGalaxies, updateStats })(LobbyContainer)