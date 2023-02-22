import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import gapi from "gapi-script";

const Login = (props) => {
  const clientId =
    "475211951583-iq7scm82arhj4lqat630jvvbc2c3ug5h.apps.googleusercontent.com";

  // initializing gapi-script
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({ clientId: clientId });
    });
  }, []);

  const responseGoogle = (response) => {
    props.response(response);
    console.log(response);
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
