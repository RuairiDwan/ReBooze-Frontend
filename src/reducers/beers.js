import { RECEIVE_BEERS } from '../actions/beers'
import { RETRIEVE_DATA } from '../actions/retrieveAllData'
import { BEER_SEARCH } from '../actions/beerSearch'

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
        case BEER_SEARCH:
            console.log("Changing Search Term")
            console.log(action.searchTerm)
            return {
                ...state,
                "searchTerm": action.searchTerm
            }
        default :
            return state
    }
}