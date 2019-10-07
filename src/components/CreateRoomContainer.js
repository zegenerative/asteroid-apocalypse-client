import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/actions'
import CreateRoom from './CreateRoom'

class CreateRoomContainer extends React.Component {
  state = {
    title: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createRoom(this.state)
    this.setState({
        title: ''
      })
  }

  render() {
    return (<div>
        <CreateRoom
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
         />
    </div>
    )
  }
}

export default connect(null, { createRoom })(CreateRoomContainer)