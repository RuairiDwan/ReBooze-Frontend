import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import retrieveUserDataAsync from '../../actions/users/retrieveUserDataAsync';
import './LoginButton.css'


const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();


  return (
      <button type="button" classs="button" onClick={() => loginWithRedirect()}>Log In</button>
  );
};


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
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
  