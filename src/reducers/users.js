import { RETRIEVE_USER_DATA } from '../actions/users/retrieveUserData'

export default function user (state = [], action) {
    console.log('Action Type', action.type)

    switch (action.type) {
        case RETRIEVE_USER_DATA :
            console.log('Receiving User Data')
            return {
                ...state,
                ...action.user
            }
        default :
            return state
    }
}