import retrieveRatingsAsync from './retrieveRatingsAsync';
import retrieveVotesAsync from './retrieveVotesAsync';


export default function retrieveRatingsAndVotes (beerID, userID) {
    console.log("Retrieving Votes and Ratings")
    return (dispatch) => {
        dispatch(retrieveRatingsAsync(beerID))
        dispatch(retrieveVotesAsync(userID))
    }
}