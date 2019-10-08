import React from 'react'
import { connect } from 'react-redux'
import { createGalaxy } from '../actions/actions'
import CreateGalaxy from './CreateGalaxy'

class CreateGalaxyContainer extends React.Component {
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
        <CreateGalaxy
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
         />
    </div>
    )
  }
}

export default connect(null, { createGalaxy })(CreateGalaxyContainer)