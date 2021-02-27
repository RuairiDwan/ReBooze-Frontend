import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'universal-cookie';
import './LoginButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const cookies = new Cookies();

  const customlogout = () => {
    
    localStorage.setItem("logged in", "false")
    cookies.set('JWT', '', { path: '/' });
    logout({ returnTo: window.location.origin })
  }

  return (
    <button className="btn" onClick={() => customlogout()}>
      Log Out
    </button>
  );
};

export default LogoutButton;