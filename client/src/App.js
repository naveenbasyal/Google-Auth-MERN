import React, { useState } from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";

const App = () => {
  const [authState, setAuthState] = useState();
  const response = (res) => {
    setAuthState(res);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column"
      style={{ height: "100vh" }}
    >
      {!authState ? ( // if the user not logged in show them a login button, otherwise show Logout
        <Login response={response} />
      ) : (
        <div>
          <img src={authState.profileObj.imageUrl} alt="" />
          <h3>{authState.profileObj.name}</h3>
          <h4>{authState.profileObj.email}</h4>
          <Logout response={response} />
        </div>
      )}
    </div>
  );
};

export default App;
