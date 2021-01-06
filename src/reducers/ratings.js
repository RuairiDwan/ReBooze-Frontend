import { SUBMIT_RATING} from '../actions/ratings/submitRating'
import { RETRIEVE_RATINGS } from '../actions/ratings/retriveRatings'

export default function ratings (state = [], action) {
    console.log('Action Type', action.type)
    
    switch (action.type) {
        case SUBMIT_RATING :
            console.log('Submitting Rating')
            return state.concat([action.rating])
        
        case RETRIEVE_RATINGS :
            console.log("Retrieving Ratings")
            return {
                ...state,
                ...action.ratings
            }
            
        default :
            return state
    }
}