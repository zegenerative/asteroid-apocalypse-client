export default function (state = '', action = {}) {
    switch(action.type) {
        case 'LOGIN':
            console.log(action.payload.jwt)
            return action.payload.jwt
        case 'SIGN_UP':
            console.log('sign up credentials from reducer')
            return action.payload
        default: 
            return state
    }
}