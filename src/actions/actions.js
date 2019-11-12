import request from 'superagent'
import { url } from '../constants/url'

export const LOGIN = 'LOGIN'

function loginCredentials (payload) {
    return {
        type: LOGIN,
        payload
    }
}

export const login = (username, email, password) => dispatch => {
  request
    .post(`${url}/login`)
    .send({username, email, password})
    .then(response => {
        const action = loginCredentials(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

export const signup = (username, email, password) => dispatch => {
  request
    .post(`${url}/user`)
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
    const token = user.jwt

    if (!galaxies.length) {
      request(`${url}/room`)
        .set('Authorization', `Bearer ${token}`) 
        .then(response => {
            const action = allGalaxies(response.body)
            dispatch(action)
        })
        .catch(console.error)
    }
}

export const createGalaxy = data => (dispatch, getState) => {
    const state = getState()
    const { user } = state
    const token = user.jwt
    request
        .post(`${url}/room`)
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .then(res => console.log('result', res))
    .catch(error => console.error('error',error))
}

// winner
export const WINNER = 'WINNER'

function winner(payload) {
  return {
    type: WINNER,
    payload
  }
}

export const getWinner = data => (dispatch) => {
    request(`${url}/room/winner`)
        .send(data)
        .then(response => {
            const action = winner(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

export const GALAXY_STATUS = 'GALAXY_STATUS'

function galaxyStatus(payload) {
  return {
    type: GALAXY_STATUS,
    payload
  }
}

export const getGalaxyStatus = (user, id) => (dispatch) => {
  request
      .get(`${url}/room/${id}`)
      .set('Authorization', `Bearer ${user}`)
      .then(response => {
          const action = galaxyStatus(response.body)
      dispatch(action)
  })
  .catch(console.error)
}

export const updateGalaxyStatus = (user, id) => (dispatch) => {
  request
      .put(`${url}/room/${id}`)
      .set('Authorization', `Bearer ${user}`)
      .send({ roomId: id })
      .then(response => {
          const action = galaxyStatus(response.body)
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
      .put(`${url}/user/${id}`)
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
  request(`${url}/user/${id}/rank`)
      .then(response => {
          const action = rank(response.body)
      dispatch(action)
  })
  .catch(console.error)
}

export const STREAM = 'STREAM'

export const fetchGalaxies = (payload) => ({
    type: STREAM,
    payload
})

export const UPDATE_SOME_STATS = 'UPDATE_SOME_STATS'

export const updateStats = (payload) => ({
    type: UPDATE_SOME_STATS,
    payload
})

// IMPLEMENT SCORE ACTIONS:
// export const addCount = current => {
//   return {
//     type: "COUNT",
//     payload: current + 1
//   };
// };

// export const updateStreak = value => {
//   return {
//     type: "STREAK",
//     payload: value
//   };
// };

// export const addScore = current => {
//   return {
//     type: "SCORE",
//     payload: current
//   };
// };
// export const addWin = current => {
//   return {
//     type: "WIN_PERCENT"
//   };
// };

// export const addLevel = current => {
//   return {
//     type: "LEVEL",
//     payload: current + 1
//   };
// };
