import * as API from '../../API'
import { retrieveRatings } from './retrieveRatings';

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