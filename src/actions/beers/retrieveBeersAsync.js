import * as API from '../../API'
import { retrieveBeers } from './retrieveBeers';

export const RETRIEVE_DATA = 'RETRIEVE_DATA'

export default function retrieveBeersAsync () {
    return (dispatch) => {
        return API.getBeers()
        .then((responseData) => {
          console.log('Beers Request')
          console.log(responseData)
          dispatch(retrieveBeers(responseData))
        })
    }
}