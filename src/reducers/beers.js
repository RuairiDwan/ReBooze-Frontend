import { RECEIVE_BEERS } from '../actions/beers'
import { RETRIEVE_DATA } from '../actions/retrieveAllData'

export default function beers (state = [], action) {
    console.log('Action Type', action.type)

    switch (action.type) {
        case RECEIVE_BEERS :
            console.log('Receiving beers')
            return {
                ...state,
                ...action.beers
            }
        case RETRIEVE_DATA :
            return {
                ...state,
                ...action.beers
            }
        default :
            return state
    }
}