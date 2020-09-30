import React from "react";

const LoggedInComponent = ({ logout }) => {
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default LoggedInComponent;
