import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const inlineStyle = {
    display: 'inline'
}

export default class GameStats extends Component {
    render() {
        return (
            <div>
                <h4 style={inlineStyle}>Player:{this.props.username}</h4>
                <h4 style={inlineStyle}>Score:{this.props.score}</h4>
                <h4 style={inlineStyle}>Time:</h4>
                <h4 style={inlineStyle}>Health:</h4>
                <h4 style={inlineStyle}>Rank:</h4>
                <button><h3><Link to='/lobby'>Exit space</Link></h3></button>
            </div>
        )
    }
}


