export const RETRIEVE_VOTES = 'RETRIEVE_VOTES'

export function retrieveVotes(votes) {
    return {
        type: RETRIEVE_VOTES,
        votes
    }
}