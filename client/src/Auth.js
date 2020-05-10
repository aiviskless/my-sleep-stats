import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Grid, Button } from "@material-ui/core";
import { Title } from "./components/Title";
import { Demo } from "./components/Demo";

export const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Title />
      <Demo />
      <Grid
        style={{
          height: "100vh",
          maxWidth: 300,
          margin: "0 auto",
        }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {showRegister ? <Register /> : <Login />}
      </Grid>
      <Button
        size="large"
        color="primary"
        onClick={() => setShowRegister(!showRegister)}
        className="bottom"
      >
        {showRegister ? "Login" : "Register"}
      </Button>
    </>
  );
};
