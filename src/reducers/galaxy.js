export default function (state = initialState, action = {}) {
    switch(action.type) {
        case 'UPDATE_STATUS':
            return action.payload
        case 'UPDATE_SOME_STATS':
            const newStatus = action.payload.status
            return { ...state, status: newStatus }
        default:
            return state
    }
}

const initialState = {
    status: 'empty',
    id: 0,
    // name: 'nobody'
}
