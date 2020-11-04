import React from "react";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  const { user , isAuthenticated} = useAuth0();
  //const { name } = user;
  console.log(user)
  console.log(isAuthenticated)
  return (
    isAuthenticated && (
      <div>
      <h2>Profile</h2>
      <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;