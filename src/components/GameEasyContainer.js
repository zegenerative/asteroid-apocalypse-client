import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import sketch1 from './Games/sketch1'
import { connect } from 'react-redux'
import { totalScore } from '../actions/actions'

class GameEasyContainer extends Component {

    componentDidMount() {
        this.props.totalScore(1, 10)
    }
    
    render() {
        return (
            <div>
                <P5Wrapper sketch={sketch1}></P5Wrapper>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { 
        user: state.user,
        galaxies: state.galaxies
      }
  }
  
  export default connect(mapStateToProps, { totalScore })(GameEasyContainer)