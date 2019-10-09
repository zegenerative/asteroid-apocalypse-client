import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch1 from './Games/sketch1'
import { connect } from 'react-redux'
import { getGalaxyStatus, updateGalaxyStatus } from '../actions/actions'
import GameStats from './GameStats'

class GameEasyContainer extends Component {

    componentDidMount() {
        const galaxy = this.props.match.params.id
        const status = this.props.galaxies[galaxy - 1].status
        if(status === 'empty') { 
            this.props.updateGalaxyStatus(this.props.token, galaxy, 'waiting')
        } else if(status === 'waiting') {
            this.props.updateGalaxyStatus(this.props.token, galaxy, 'full')
        }
    }
    
    render() {
        return (
            <div>
                <header><GameStats 
                username={this.props.username}
                /></header>
                <P5Wrapper sketch={sketch1}></P5Wrapper>
            </div>
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
  
  export default connect(mapStateToProps, { getGalaxyStatus, updateGalaxyStatus })(GameEasyContainer)