export default function (state = [], action = {}) {
    switch(action.type) {
        case 'ALL_GALAXIES':
            return action.payload
        case 'NEW_GALAXY':
            console.log('id from the reducer: ', action.payload)
            return [ action.payload, ...state ]
        case 'GALAXY_STATUS':
            return action.payload
        default: 
            return state
    }
}
