import React from "react";
import { connect } from "react-redux";
import SleepTracker from "./SleepTracker";
import { Auth } from "./Auth";
import ReactLoading from "react-loading";

const AppContainer = ({ isAuthenticated, authLoading, itemLoading }) => {
  return (
    <>
      {(authLoading || itemLoading) && (
        <div className="loading-container">
          <div>
            <ReactLoading
              type={"spin"}
              color={"#3f51b5"}
              height={100}
              width={100}
            />
          </div>
        </div>
      )}
      {isAuthenticated ? <SleepTracker /> : <Auth />}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  authLoading: state.auth.isLoading,
  itemLoading: state.item.loading,
});

export default connect(mapStateToProps)(AppContainer);
