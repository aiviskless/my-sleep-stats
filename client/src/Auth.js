import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Button, Box } from "@material-ui/core";
import { Title } from "./components/Title";
import { Demo } from "./components/Demo";

export const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Box
      style={{ height: "calc(100vh - 80px)" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="nowrap"
    >
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        <Title />
        <Box mt={2}>
          <Demo />
        </Box>
      </Box>

      {showRegister ? <Register /> : <Login />}

      <Box mt={3}>
        <Button
          size="large"
          color="primary"
          onClick={() => setShowRegister(!showRegister)}
        >
          {showRegister ? "Login" : "Register"}
        </Button>
      </Box>
    </Box>
  );
};
