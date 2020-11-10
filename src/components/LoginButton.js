import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import { retrieveUserData } from '../actions/retrieveUserData';



const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();



  const userData = () => {
    props.retrieveUserData({
      "name": "Rory",
    })
  }

  

  const login = () => {
      loginWithRedirect()


      props.retrieveUserData({
        "name": "Rory"
      })

  }

  return (
    <button onClick={() => login()}>Log In</button>
  );
};


const mapStateToProps = ({user}) => {

  return {
    user: user
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    retrieveUserData: (data) => {dispatch(retrieveUserData(data))}
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
  