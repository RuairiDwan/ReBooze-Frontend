import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import { retrieveUserData } from '../actions/retrieveUserData';



const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  console.log("Login Button")
  console.log(props)

    

  

  const login = () => {
    
    Promise(() => loginWithRedirect())
    .then(() => {
      props.dispatch(retrieveUserData({
        "name": "Rory"
      })) 
    }
  }

  return (
    <button onClick={() => login()}>Log In</button>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserData: (id) => {dispatch(retrieveUserData)}
  }
}
  
export default connect(mapDispatchToProps)(LoginButton)
  