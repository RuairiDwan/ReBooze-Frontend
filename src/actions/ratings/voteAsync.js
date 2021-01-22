import * as API from '../../API'
import  vote  from './vote';


export default function voteAsync(data) {
    return (dispatch) => {
        return API.submitVote(data)
            .then((responseData) => {
                console.log('Submitting Vote', responseData)
                dispatch(vote(data))
            })
    }
}