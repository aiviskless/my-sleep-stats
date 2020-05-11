import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import Button from "@material-ui/core/Button";

const Logout = ({ logout }) => {
  return <Button onClick={() => logout()}>Logout</Button>;
};

export default connect(null, { logout })(Logout);
