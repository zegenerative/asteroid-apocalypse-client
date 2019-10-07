import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/actions'
import SignUp from './SignUp'

class SignUpContainer extends React.Component {
  state = { email: '', password: '' }

  componentDidMount() {
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signup(this.state.email, this.state.password)
    this.setState({
        email: '',
        password: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return <SignUp
    onSubmit={this.onSubmit}
    onChange={this.onChange}
    values={this.state}
    />
  }
}

export default connect(null, { signup })(SignUpContainer)