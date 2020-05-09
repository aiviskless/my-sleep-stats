import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Box, Button } from "@material-ui/core";

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Box>
      Auth
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowLogin(true)}
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowRegister(true)}
      >
        Register
      </Button>
      {showLogin && <Login />}
      {showRegister && <Register />}
    </Box>
  );
};
