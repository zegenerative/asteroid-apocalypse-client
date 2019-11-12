import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch1 from './Games/sketch1'
import { connect } from 'react-redux'
import { getGalaxyStatus } from '../actions/actions'
import GameStats from './GameStats'
// import ScoreBoard from './ScoreBoard'
import { url } from '../constants/url'
import store from '../store'

class GameContainer extends Component {

    gameSource = new EventSource(`${url}/gameStream/room/${this.props.match.params.id}`);

    componentDidMount() {
        this.gameSource.onmessage = event => {
            const galaxy = JSON.parse(event.data);
            let status = 'none'
            if(galaxy) {
                status = galaxy.status
            }
            store.dispatch({
                type: 'UPDATE_STATUS',
                payload: {
                    status,
                }
            })
        }
    }
    
    render() {
        return (
            <div>
                { !this.props.status && 'Loading...'}
                { this.props.status === 'waiting' && 'Waiting for player 2...'}
                { this.props.status === 'full' && 
                    <div>
                        <header><GameStats 
                        username={this.props.username}
                        score={this.props.score}
                        // winner={this.props.winner}
                        // end={this.props.end}
                        // time={this.props.time}
                        // health={this.props.health}
                        /></header>
                        <P5Wrapper sketch={sketch1}></P5Wrapper>
                    </div>
                }
            </div>
        )
    }    
}

function mapStateToProps (state) {
    return { 
        token: state.user.jwt,
        username: state.user.username,
        galaxies: state.galaxies,
        status: state.galaxy.status,
        score: state.game.score,
        // winner: state.game.winner,
        // end: state.game.end,
        // time: state.game.time
      }
  }
  
  export default connect(mapStateToProps, { getGalaxyStatus })(GameContainer)