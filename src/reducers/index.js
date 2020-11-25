import { combineReducers } from 'redux'

import beers from './beers'
import user from './users'
import ratings from './ratings'

export default combineReducers({
    beers,
    user,
    ratings
})