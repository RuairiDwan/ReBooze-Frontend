import { RETRIEVE_BEERS } from '../actions/beers/retrieveBeers'
import { RETRIEVE_DATA } from '../actions/beers/retrieveBeersAsync'
import { BEER_SEARCH } from '../actions/beers/beerSearch'

export default function beers (state = [], action) {
    console.log('Action Type', action.type)

    switch (action.type) {
        case RETRIEVE_BEERS :
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