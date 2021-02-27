import * as API from '../../API'
import { retrieveRatings } from './retrieveRatings';

export const RETRIEVE_RATINGS = 'RETRIEVE_RATINGS'

export default function retrieveRatingsAsync (beerID) {
    console.log("here")
    return (dispatch) => {
        return API.getRatings(beerID)
        .then((responseData) => {
          console.log('Retrieving Ratings', responseData)
          dispatch(retrieveRatings(responseData))
        })
    }
}