export default function (state = initialState, action = {}) {
    switch(action.type) {
        case 'UPDATE_STATUS':
            console.log('status of room being updated by CUSTOM REDUCER', action.payload)
            return action.payload
        case 'UPDATE_SOME_STATS':
            console.log('action.payload.status', action.payload.status)
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
