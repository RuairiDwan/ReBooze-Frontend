import * as API from '../../API'
import { submitRating } from './submitRating';

export const SUBMIT_RATING = 'SUBMIT_RATING'

export default function submitRatingAsync (data) {
    return (dispatch) => {
        return API.submitRating(data)
        .then((responseData) => {
          console.log('Submitting Rating', responseData)
          dispatch(submitRating(data))
        })
    }
}