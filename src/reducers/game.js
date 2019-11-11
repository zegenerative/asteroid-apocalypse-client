export default function (state = initialState, action = {}) {
    switch(action.type) {
        case 'WINNER':
            return { ...state, ...action.payload } 
        case 'UPDATE_SCORE':
            return { ...state, ...action.payload }
        case 'GAME_ENDS':
            return { ...state, ...action.payload }
        case 'UPDATE_TIME':
            return { ...state, ...action.payload }
        default: 
            return state
    }
}

const initialState = {
    time: 0,
    score: 0,
    winner: undefined,
    end: false,
}