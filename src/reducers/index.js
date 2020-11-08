import { combineReducers } from 'redux'

import beers from './beers'
import user from './user'

export default combineReducers({
    beers,
    user
})