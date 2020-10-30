import { RECEIVE_BEERS } from '../actions/beers'

export default function beers (state = {}, action) {
    console.log('Action Type', action.type)

    switch (action.type) {
        case RECEIVE_BEERS :
            console.log('Receiving beers')
            return {
                ...state,
                ...action.beers
            }
        default :
            return state
    }
}