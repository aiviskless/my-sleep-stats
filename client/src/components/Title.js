import React from "react";
import moonImg from "../assets/images/moon.svg";
import { Grid } from "@material-ui/core";

export const Title = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <img src={moonImg} style={{ width: 45, marginRight: 10 }} alt="Logo" />
      <h1 style={{ fontSize: 34 }}>My Sleep Stats</h1>
    </Grid>
  );
};
