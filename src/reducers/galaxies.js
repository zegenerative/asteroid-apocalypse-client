export default function (state = [], action = {}) {
    switch(action.type) {
        case 'ALL_GALAXIES':
            return action.payload
        case 'NEW_GALAXY':
            console.log('id from the reducer: ', action.payload)
            return [ action.payload, ...state ]
        default: 
            return state
    }
}
