import React from "react";
import { connect } from "react-redux";
import SleepTracker from "./SleepTracker";
import { Auth } from "./Auth";

const AppContainer = ({ isAuthenticated }) => {
  return isAuthenticated ? <SleepTracker /> : <Auth />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AppContainer);
