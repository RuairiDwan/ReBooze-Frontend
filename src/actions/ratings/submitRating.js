export const SUBMIT_RATING = 'SUBMIT_RATING'

export function submitRating (rating) {
    return {
        type: SUBMIT_RATING,
        rating
    }
}