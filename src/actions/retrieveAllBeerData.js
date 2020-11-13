import * as API from '../API'
import { receiveBeers } from '../actions/beers';

export const RETRIEVE_ALL_BEER_DATA = 'RETRIEVE_ALL_BEER_DATA'

export default function retrieveAllBeerData () {
    return (dispatch) => {
        return API.getBeers()
        .then((responseData) => {
          console.log('Beers Request', responseData)
          dispatch(receiveBeers(responseData))
        })
    }

}