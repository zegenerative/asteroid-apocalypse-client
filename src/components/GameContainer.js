import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch1 from './Games/sketch1'
import { connect } from 'react-redux'
import { getGalaxyStatus, updateStats } from '../actions/actions'
import GameStats from './GameStats'
import ScoreBoard from './ScoreBoard'
import { url } from '../constants/url'

class GameContainer extends Component {

    gameSource = new EventSource(`${url}/gameStream/room/${this.props.roomId}`);

    componentDidMount() {
         //console.log("component did mount",this.source)
        this.gameSource.onmessage = event => {
        //console.log('got an event?', event.data)
        const something = JSON.parse(event.data);
        //console.log("data is:",messages)
        this.props.updateStats(something);
        }
    }
    
    render() {
        if(this.props.end === false) {
            return (
                <div>
                    <header><GameStats 
                    username={this.props.username}
                    // score={this.props.score}
                    // winner={this.props.winner}
                    // end={this.props.end}
                    // time={this.props.time}
                    // health={this.props.health}
                    /></header>
                    <P5Wrapper sketch={sketch1}></P5Wrapper>
                </div>
            )
        } else {
            return (
                <div>
                    <ScoreBoard />
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
        roomId: state.galaxy.id,
        // score: state.game.score,
        // winner: state.game.winner,
        // end: state.game.end,
        // time: state.game.time
      }
  }
  
  export default connect(mapStateToProps, { getGalaxyStatus, updateStats })(GameContainer)