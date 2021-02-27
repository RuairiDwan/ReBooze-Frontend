import * as API from '../../API'
import { deleteRating } from './deleteRating';

export default function deleteRatingAsync (ratingID, token) {
    console.log("Deleting Rating")
    return (dispatch) => {
        return API.deleteRating(ratingID, token)
        .then((responseData) => {
          console.log('Deleting Rating', responseData)
          dispatch(deleteRating(ratingID))
        })
    }
}