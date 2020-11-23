import * as API from '../API'
import { receiveBeers } from './beers';

export const RETRIEVE_DATA = 'RETRIEVE_DATA'

export default function retrieveAllData () {
    return (dispatch) => {
        return API.getBeers()
        .then((responseData) => {
          console.log('Beers Request', responseData)
          dispatch(receiveBeers(responseData))
        })
    }
}