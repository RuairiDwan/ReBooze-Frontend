import * as API from '../../API'
import { retrieveVotes } from './retrieveVotes';

export const RETRIEVE_VOTES = 'RETRIEVE_VOTES'

export default function retrieveVotesAsync(data) {
    console.log("Retrieving Votes Async")
    return (dispatch) => {
        return API.getVotes(data)
            .then((responseData) => {
                console.log('Retrieving Votes', responseData)
                dispatch(retrieveVotes(responseData))
            })
    }
}