import React from 'react'
import LoginForm2 from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/actions'

class LoginFormContainer extends React.Component {
  state = { name: '', email: '', password: '' }

  componentDidMount() {
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.name, this.state.email, this.state.password)
    this.setState({
        name: '',
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
    return <LoginForm2
    onSubmit={this.onSubmit}
    onChange={this.onChange}
    values={this.state}
    />
  }
}

export default connect(null, { login })(LoginFormContainer)