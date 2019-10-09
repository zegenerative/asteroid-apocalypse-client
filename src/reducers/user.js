export default function (state = '', action = {}) {
    switch(action.type) {
        case 'LOGIN':
            return action.payload
        case 'WINNER':
            return action.payload
        case 'TOTAL':
            return action.payload
        case 'RANK':
            return action.payload
        default: 
            return state
    }
}