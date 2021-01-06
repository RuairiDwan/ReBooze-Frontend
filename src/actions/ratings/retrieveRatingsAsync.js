import * as API from '../../API'
import { retrieveRatings } from './retriveRatings';

export const RETRIEVE_RATINGS = 'RETRIEVE_RATINGS'

export default function retrieveRatingsAsync (data) {
    console.log("here")
    return (dispatch) => {
        return API.getRatings(data)
        .then((responseData) => {
          console.log('Retrieving Ratings', responseData)
          dispatch(retrieveRatings(responseData))
        })
    }
}