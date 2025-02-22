import { RETRIEVE_BEERS } from '../actions/beers/retrieveBeers'
import { RETRIEVE_DATA } from '../actions/beers/retrieveBeersAsync'
import { BEER_SEARCH } from '../actions/beers/beerSearch'
import { BEER_PAGE_SELECTION } from '../actions/beers/beerPageSelection'

export default function beers (state = [], action) {
    console.log('Action Type', action.type)

    switch (action.type) {
        case RETRIEVE_BEERS :
            console.log('Receiving beers')
            return {
                ...state,
                ...action.beers
            }
        case RETRIEVE_DATA:
            console.log(state.beers)
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
        case BEER_PAGE_SELECTION:
            console.log("Updating Beer Page Selected")
            console.log(action.beerSelected)
            return {
                ...state,
                "beerSelected": action.beerSelected
            }

        default :
            return state
    }
}