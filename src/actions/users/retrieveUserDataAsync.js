import * as API from '../../API'

import retrieveUserData from './retrieveUserData'

export default function retrieveUserDataAsync (data) {
    return (dispatch) => {
        return API.handleUserLogin(data)
            .then((responseData) => {
                dispatch(retrieveUserData(responseData))
        })
    }
}