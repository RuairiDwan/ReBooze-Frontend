import React from "react";
import { connect } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import retrieveUserDataAsync from '../actions/users/retrieveUserDataAsync';


const Profile = (props) => {
  const { user , isAuthenticated, getAccessTokenSilently} = useAuth0();
  //const { name } = user;
  console.log(user)
  console.log("Profile")
  console.log(props)

  if (isAuthenticated) {
    props.retrieveUserData({
      "name": "Rory",
    })
  }

  return (
    isAuthenticated && (
      <div>
      <h2>Profile</h2>
      <h2>{user.name}</h2>
      <h2>{getAccessTokenSilently}</h2>
      <button onClick={async () => {
        try {
          const token = await getAccessTokenSilently({
            audience: 'https://rebooze-login',
            scope: 'get:my-ratings',
          })
          console.log(token)
        }

        catch (e) {
          console.error(e)
        }
      }}>Log In</button>

      </div>
    )
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserData: (data) => {dispatch(retrieveUserDataAsync(data))}
  }
}

export default connect(null, mapDispatchToProps)(Profile)