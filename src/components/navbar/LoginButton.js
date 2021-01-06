import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from 'react-redux';
import retrieveUserDataAsync from '../../actions/users/retrieveUserDataAsync';



const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();



  const userData = () => {
    props.retrieveUserData({
      "name": "Rory",
    })
  }

  const login_part_two = () => {}

  const login = () => {
      


      props.retrieveUserData({
        "name": "Rory"
      })

      loginWithRedirect()

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
    retrieveUserData: (data) => {dispatch(retrieveUserDataAsync(data))}
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
  