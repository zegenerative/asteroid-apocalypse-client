import request from 'superagent'

const baseUrl = 'http://localhost:4000'
// const baseUrl = 'heroku link'

export const LOGIN = 'LOGIN'

function loginCredentials (payload) {
    return {
        type: LOGIN,
        payload
    }
}

//data = 'email','password'
export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({email, password})
    .then(response => {
        //I expect the response to have a jwt
        const action = loginCredentials(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

export const SIGN_UP = 'SIGN_UP'

function signupCredentials (payload) {
    return {
        type: SIGN_UP,
        payload
    }
}

//data = 'email','password'
export const signup = (email, password) => dispatch => {
    console.log('credentials from the action creator')
  request
    .post(`${baseUrl}/user`)
    .send({email, password})
    .then(response => {
        const action = signupCredentials(response.body)
        dispatch(action)
    })
    .catch(console.error)
}