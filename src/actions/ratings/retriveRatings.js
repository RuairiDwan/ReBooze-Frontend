export const RETRIEVE_RATINGS = 'RETRIEVE_RATINGS'

export function retrieveRatings (ratings) {
    return {
        type: RETRIEVE_RATINGS,
        ratings
    }
}