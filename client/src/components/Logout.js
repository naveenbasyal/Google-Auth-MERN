import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = (props) => {
  const clientId =
    "475211951583-iq7scm82arhj4lqat630jvvbc2c3ug5h.apps.googleusercontent.com";

  const logout = () => {
    props.response();
    console.log("logout successful");
  };
  return (
    <div>
        <h5></h5>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </div>
  );
};

export default Logout;
