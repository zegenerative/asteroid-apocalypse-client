import React from 'react'
import { connect } from 'react-redux'
import { createGalaxy } from '../actions/actions'
import CreateGalaxy from './CreateGalaxy'

class CreateGalaxyContainer extends React.Component {
  state = { 
    galaxyName: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
        galaxyName: ''
      })
    this.props.createGalaxy(this.state)
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

// function mapStateToProps (state) {
//   return { 
//       galaxies: state.galaxies
//     }
// }

export default connect(null, { createGalaxy })(CreateGalaxyContainer)