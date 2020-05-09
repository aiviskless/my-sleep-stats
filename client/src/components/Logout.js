import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

const Logout = ({ logout }) => {
  return <div onClick={() => logout()}>Logout</div>;
};

export default connect(null, { logout })(Logout);
