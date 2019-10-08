export default function (state = initialState, action = {}) {
    switch(action.type) {
        case 'NEW_GALAXY':
            return [ action.payload, ...state ]
        default: 
            return state
    }
}

const initialState = []