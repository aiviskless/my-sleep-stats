import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Grid, Button, Box } from "@material-ui/core";
import { Title } from "./components/Title";
import { Demo } from "./components/Demo";

export const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Grid
      style={{
        height: "100vh",
      }}
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Box mt={5}>
        <Grid container direction="column" alignItems="center">
          <Title />
          <Box mt={2}>
            <Demo />
          </Box>
        </Grid>
      </Box>

      {showRegister ? <Register /> : <Login />}

      <Box mb={5}>
        <Button
          size="large"
          color="primary"
          onClick={() => setShowRegister(!showRegister)}
        >
          {showRegister ? "Login" : "Register"}
        </Button>
      </Box>
    </Grid>
  );
};
