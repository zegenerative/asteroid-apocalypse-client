import { combineReducers } from 'redux'
import user from './user'
import galaxies from './galaxies'
import galaxy from './galaxy'

export default combineReducers({
    user, 
    galaxies,
    galaxy
})