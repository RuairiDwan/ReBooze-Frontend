import { SUBMIT_RATING} from '../actions/ratings/submitRating'
import { RETRIEVE_RATINGS } from '../actions/ratings/retrieveRatings'
import { RETRIEVE_VOTES } from '../actions/ratings/retrieveVotes'
import { UP_VOTE } from '../actions/ratings/vote'


export default function ratings (state = [], action) {
    console.log('Action Type', action.type)
    
    switch (action.type) {
        case SUBMIT_RATING :
            console.log('Submitting Rating')
            return state.concat([action.rating])
        
        case RETRIEVE_RATINGS :
            console.log("Retrieving Ratings")
            console.log(action.ratings)
            return {
                ...state,
                ...action.ratings
            }

        case RETRIEVE_VOTES:
            console.log("Retrieving Votes")
            return Object.values(state).map(t1 => ({ ...t1, ...action.votes.find(t2 => t2.rating_id === t1.id) }))

        case UP_VOTE:
            console.log('Voting')
            return state.map((rating) => rating.id !== action.vote.rating_id ? rating :
                Object.assign({}, rating, { vote: true }))

            
        default :
            return state
    }
}