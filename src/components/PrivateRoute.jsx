import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component, ...props}) => {
//   var {component, ...props} = props
  const isAuthed = localStorage.getItem("token");
  return isAuthed ? (
    <Route exact {...props} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
