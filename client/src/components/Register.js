import React, { useState, useEffect } from "react";
import { Button, Box, TextField, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../actions/authActions";
import Alert from "@material-ui/lab/Alert";
import { clearErrors } from "../actions/errorActions";

const Register = ({ error, register, clearErrors, isAuthenticated }) => {
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    password: "",
    msg: null,
  });

  const [msg, setMsg] = useState("");

  const onSubmit = () => {
    const { name, email, password } = fieldValues;

    const newUser = {
      name,
      email,
      password,
    };

    register(newUser);
  };

  useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // if (modal && isAuthenticated) {
    //   toggle()
    // }
  }, [error]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box alignItems="left" mb={2}>
        <h1>Register</h1>
      </Box>
      {msg && <Alert severity="error">{msg}</Alert>}
      <form noValidate autoComplete="off">
        {["name", "email", "password"].map((field, i) => {
          return (
            <Box mb={3} key={i}>
              <TextField
                value={fieldValues[field]}
                type={field === "password" ? "password" : ""}
                id={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                onChange={(e) =>
                  setFieldValues({ ...fieldValues, [field]: e.target.value })
                }
              />
            </Box>
          );
        })}
        <Button variant="contained" color="primary" onClick={() => onSubmit()}>
          Submit
        </Button>
      </form>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
