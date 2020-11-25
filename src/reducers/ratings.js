import { SUBMIT_RATING} from '../actions/ratings/submitRating'


export default function ratings (state = [], action) {
    console.log('Action Type', action.type)
    
    switch (action.type) {
        case SUBMIT_RATING :
            console.log('Submitting Rating')
            return state.concat([action.rating])
                
            
        default :
            return state
    }
}