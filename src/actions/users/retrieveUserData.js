export const RETRIEVE_USER_DATA = 'RETRIEVE_USER_DATA'

export default function retrieveUserData(user){
    return {
        type: RETRIEVE_USER_DATA,
        user
    }
}