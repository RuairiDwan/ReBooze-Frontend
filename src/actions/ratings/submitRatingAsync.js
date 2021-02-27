import * as API from '../../API'
import { submitRating } from './submitRating';


export default function submitRatingAsync (data, token) {
    return (dispatch) => {
        return API.submitRating(data, token)
        .then((responseData) => {
          console.log('Submitting Rating')
          console.log(responseData)
          dispatch(submitRating(data))
        })
    }
}