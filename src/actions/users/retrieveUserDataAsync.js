import * as API from '../../API'

import retrieveUserData from './retrieveUserData'

export default function retrieveUserDataAsync (data) {
    return (dispatch) => {
        return API.handleUserLogin('rodge.18@hotmail.com')
        .then((responseData) => {
            dispatch(retrieveUserData('rodge.18@hotmail.com'))
        })
    }
}