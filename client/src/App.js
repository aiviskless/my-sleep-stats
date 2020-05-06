import React, { useState } from "react";
import { Grid, Box } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Chart } from "./components/Chart";
import { DataForm } from "./components/DataForm";
import { Logout } from "./components/Logout";
import "./App.css";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const testData = [
    {
      date: "",
      day: "Thu",
      Recommended: 8,
      Sleep: 7.5,
      Nap: 0,
    },
    {
      date: "",
      day: "Fri",
      Recommended: 8,
      Sleep: 9,
      Nap: 0,
    },
    {
      date: "",
      day: "Sat",
      Recommended: 8,
      Sleep: 7.5,
      Nap: 0,
    },
  ];

  const [data, setData] = useState(testData);

  return (
    <ThemeProvider theme={theme}>
      <Box mt={5}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Chart data={data.slice(Math.max(data.length - 7, 0))} />
          <DataForm data={data} setData={setData} />
          <Logout />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
