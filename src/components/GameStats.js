import React, { Component } from 'react'

const inlineStyle = {
    display: 'inline'
}

export default class GameStats extends Component {
    render() {
        return (
            <div>
                <h4 style={inlineStyle}>Player:{this.props.username}</h4>
                <h4 style={inlineStyle}>Score:</h4>
                <h4 style={inlineStyle}>Time:</h4>
                <h4 style={inlineStyle}>Health:</h4>
                <h4 style={inlineStyle}>Rank:</h4>
            </div>
        )
    }
}
