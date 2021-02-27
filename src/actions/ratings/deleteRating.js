export const DELETE_RATING = 'DELETE_RATING'

export function deleteRating (rating) {
    return {
        type: DELETE_RATING,
        rating
    }
}