import request from 'superagent'

// const baseUrl = 'http://localhost:6000'
// const baseUrl = 'http://83.163.69.253:4000'
const baseUrl = 'https://desolate-escarpment-23810.herokuapp.com'

export const LOGIN = 'LOGIN'

function loginCredentials (payload) {
    return {
        type: LOGIN,
        payload
    }
}

//data = 'email','password'
export const login = (username, email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({username, email, password})
    .then(response => {
        //I expect the response to have a jwt
        const action = loginCredentials(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

export const signup = (username, email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({username, email, password})
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
    const { user, galaxies } = state

    if (!galaxies.length) {
      request(`${baseUrl}/room`)
        .set('Authorization', `Bearer ${user}`) 
        .then(response => {
            console.log('rooms', response.body)
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

export const createGalaxy = data => (dispatch, getState) => {
    const state = getState()
    const { user } = state
    request
        .post(`${baseUrl}/room`)
        .set('Authorization', `Bearer ${user}`)
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
    request(`${baseUrl}/room/winner`)
        .send(data)
        .then(response => {
            const action = winner(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

//update total score
export const TOTAL = 'TOTAL'

function score(payload) {
  return {
    type: TOTAL,
    payload
  }
}

export const totalScore = (id, points) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
      .put(`${baseUrl}/user/${id}`)
      .set('Authorization', `Bearer ${user}`)
      .send({ totalScore: 12 })
      .then(response => {
          const action = score(response.body)
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