export const RETRIEVE_USER_DATA = 'RETRIEVE_USER_DATA'

export function retrieveUserData (user) {
    return {
        type: RETRIEVE_USER_DATA,
        user
    }
}