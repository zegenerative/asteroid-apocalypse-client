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

export const signup = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({email, password})
    .then(console.log('Sign up successful'))
    .catch(console.error)
}

export const ALL_GALAXIES= 'ALL_GALAXIES'

function allGalaxies (payload) {
    return {
      type: ALL_GALAXIES,
      payload
    }
  }
  
export const getGalaxies = () => (dispatch, getState) => {
    const state = getState()
    const { galaxies } = state

    if (!galaxies.length) {
        request(`${baseUrl}/games`)
        .then(response => {
            const action = allGalaxies(response.body)
            dispatch(action)
        })
        .catch(console.error)
    }
}

export const NEW_GALAXY = 'NEW_GALAXY'

function newGalaxy(payload) {
  return {
    type: NEW_GALAXY,
    payload
  }
}

export const createGalaxy = data => (dispatch) => {
    request
        .post(`${baseUrl}/game`)
        .send(data)
        .then(response => {
            const action = newGalaxy(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

// endpoints for score

// winner
export const WINNER = 'WINNER'

function winner(payload) {
  return {
    type: WINNER,
    payload
  }
}

export const getWinner = data => (dispatch) => {
    request(`${baseUrl}/rooms/winner`)
        .send(data)
        .then(response => {
            const action = winner(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

// total score
export const TOTAL = 'TOTAL'

function total(payload) {
  return {
    type: TOTAL,
    payload
  }
}

export const getTotal = (id) => (dispatch) => {
    request(`${baseUrl}/user/${id}/totalscore`)
        .then(response => {
            const action = total(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

// rank
export const RANK = 'RANK'

function rank(payload) {
  return {
    type: RANK,
    payload
  }
}

export const getRank = (id) => (dispatch) => {
    request(`${baseUrl}/user/${id}/rank`)
        .then(response => {
            const action = rank(response.body)
        dispatch(action)
    })
    .catch(console.error)
}