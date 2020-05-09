import React, { useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

import "./App.css";
import AppContainer from "./AppContainer";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppContainer style={{ margin: 0 }} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
