import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import gapi from "gapi-script";
import axios from "axios";

const Login = (props) => {
  const clientId =
    "475211951583-iq7scm82arhj4lqat630jvvbc2c3ug5h.apps.googleusercontent.com";

  // initializing gapi-script to remove the error while login
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({ clientId: clientId });
    });
  }, []);

  const responseGoogle = async (response) => {
    console.log(response);
    await axios
      .post("http://localhost:8000", {
        idToken: response.tokenId,
      })
      .then((response) => {
        // console.log(response);
        props.response(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
