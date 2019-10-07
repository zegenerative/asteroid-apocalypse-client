export default function (state = '', action = {}) {
    switch(action.type) {
        case 'LOGIN':
            return action.payload.jwt
        default: 
            return state
    }
}