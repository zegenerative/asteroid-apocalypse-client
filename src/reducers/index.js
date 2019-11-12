import { combineReducers } from 'redux'
import user from './user'
import galaxies from './galaxies'
import galaxy from './galaxy'
import game from './game'

export default combineReducers({
    user, 
    galaxies,
    galaxy,
    game
})