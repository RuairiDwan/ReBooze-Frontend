import React, {useCallback } from 'react'
import { connect } from 'react-redux';
import retrieveUserDataAsync from '../actions/users/retrieveUserDataAsync';
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';



const Callback = (props) => {

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const history = useHistory();
    isAuthenticated && localStorage.setItem("logged in", "true")

    const login = async () => {
        try {
            console.log("In async function")
            const token = await getAccessTokenSilently({
                audience: 'https://rebooze-login',
                scope: "get:my-ratings"
            });
            cookies.set('JWT', token, { path: '/' });

            console.log(token)
        } catch (e) {
            console.error(e);
        }
    }
    
    console.log("The user is")
    console.log(isAuthenticated)

    isAuthenticated && login()

    const cookies = new Cookies();
    
    console.log("The JWT is :")
    console.log(cookies.get('JWT'));


    typeof user !== 'string' && isAuthenticated && props.retrieveUserData({
        "name": user.given_name,
        "email": user.email
    })

    

    if (isAuthenticated) {
        return <Redirect push to="/" />;
    }

    return (
        <div>
            Callback Function
        </div>
    )
}

const mapStateToProps = ({user}) => {

    return {
      user: user
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      retrieveUserData: (data) => {dispatch(retrieveUserDataAsync(data))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Callback)
