import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/User";

import React from "react";

function Nav(props) {
  const { setUser, user } = useContext(userContext);
  function handleLogout(){
    setUser(null);
  } 

  return (
    <>
      {user ? (
        <div>
          <h1>Hi: {user?.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
}

export default Nav;
