import React from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../actions/actions'
import { Redirect } from 'react-router-dom'

class LoginFormContainer extends React.Component {
  state = { username: '', email: '', password: '' }

  componentDidMount() {
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username, this.state.email, this.state.password)
    this.setState({
        username: '',
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
    if(this.props.token){
      return <Redirect to='/lobby' />
    }

    return <LoginForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user
  }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)