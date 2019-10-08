import React, { Component } from 'react'
import game from './game'

export default class P5Wrapper extends Component {
    // state = {
    //     left: false,
    //     middle: true,
    //     right: false
    // }

    componentDidMount() {
        this.canvas1 = new window.p5(game, 'canvas1-container')
        this.canvas1.props = this.props.p5Props
        this.canvas1.onSetAppState = this.props.onSetAppState
    }

    shouldComponentUpdate(nextProps) {
        this.canvas1.props = nextProps.p5Props
        return false
    }

    componentWillUnmount() {
        this.canvas1.remove()
    }

    //Keypressing from outside the p5-sketch:
    //This would make it possible to get data to the redux store
    // onKeyDown(e) {
    //     switch(e.key) {
    //         case 'ArrowLeft':
    //             this.setState({
    //                 left: true,
    //                 right: false
    //             })
    //             console.log(this.state)
    //             return
    //         case 'ArrowRight':
    //             this.setState({
    //                 left: false,
    //                 right: true
    //             })
    //             console.log(this.state)
    //             return
    //         default:
    //             return
    //     }
    // }

    render() {
        return (
            <>
                <div
                    id="canvas1-container"
                    style={{ width: "100%", textAlign: "center" }}
                    // onKeyDown={(e) => this.onKeyDown(e)}
                    tabIndex='0'
                    // move={this.state}
                > 
                </div>
            </>
        )
    }
}
