import React, { useState, useEffect } from "react";
import { Button, Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import Alert from "@material-ui/lab/Alert";

const Login = ({ error, login }) => {
  const [fieldValues, setFieldValues] = useState({
    email: "",
    password: "",
    msg: null,
  });

  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = fieldValues;
    const User = {
      email,
      password,
    };

    login(User);
  };

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
  }, [error]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {msg && (
        <Box mb={2}>
          <Alert severity="error">{msg}</Alert>
        </Box>
      )}
      <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        {["email", "password"].map((field, i) => {
          return (
            <Box mb={3} key={i}>
              <TextField
                value={fieldValues[field]}
                type={field === "password" ? "password" : ""}
                id={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                onChange={(e) =>
                  setFieldValues({ ...fieldValues, [field]: e.target.value })
                }
              />
            </Box>
          );
        })}
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          onClick={(e) => onSubmit(e)}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { login })(Login);
