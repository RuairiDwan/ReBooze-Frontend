import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
      <button classsName="btn" onClick={() => loginWithRedirect()}>Sign Up</button>
  );
};
 
export default Button