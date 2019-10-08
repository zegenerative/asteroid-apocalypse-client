import React, { Component } from 'react'
import P5Wrapper from './P5Wrapper'

export default class GameEasyContainer extends Component {
    render() {
        return (
            <div>
                <P5Wrapper
                    onSetAppState={this.onSetAppState}
                />
            </div>
        )
    }
}
