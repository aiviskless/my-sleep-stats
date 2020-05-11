import React, { useState, useEffect } from "react";
import { Button, Box, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../actions/authActions";
import Alert from "@material-ui/lab/Alert";

const Register = ({ error, register }) => {
  const [fieldValues, setFieldValues] = useState({
    name: "",
    email: "",
    password: "",
    msg: null,
  });

  const [msg, setMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
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
        {["name", "email", "password"].map((field, i) => {
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
          type="submit"
          color="primary"
          onClick={(e) => onSubmit(e)}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps, { register })(Register);
