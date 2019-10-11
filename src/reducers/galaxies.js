export default function (state = [], action = {}) {
    switch(action.type) {
        case 'ALL_GALAXIES':
            return action.payload
        case 'NEW_GALAXY':
            return [ action.payload, ...state ]
        case 'STREAM':
            console.log('WHAT IS THE STREAM action.PAYLOAD?', action.payload)
            return action.payload
        default: 
            return state
    }
}
