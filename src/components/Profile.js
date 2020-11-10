import React from "react";
import { connect } from 'react-redux';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { retrieveUserData } from '../actions/retrieveUserData';


const Profile = (props) => {
  const { user , isAuthenticated} = useAuth0();
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
      </div>
    )
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserData: (data) => {dispatch(retrieveUserData(data))}
  }
}

export default connect(null, mapDispatchToProps)(Profile)