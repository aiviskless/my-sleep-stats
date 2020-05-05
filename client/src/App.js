import React, { useState } from "react";
import { testData } from "./testData";
import { Button, Grid, Box } from "@material-ui/core";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ComposedChart,
  Line,
  Tooltip,
} from "recharts";
import "./App.css";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const [fromTime, setFromTime] = useState(new Date("2020-01-01T23:00:00"));
  const [toTime, setToTime] = useState(new Date("2020-01-02T07:00:00"));

  const data = [
    {
      date: "Mon",
      Recommended: 8,
      Sleep: 7.5,
      Nap: 1,
    },
    {
      date: "Tue",
      Recommended: 8,
      Sleep: 9,
      Nap: 0,
    },
    {
      date: "Wed",
      Recommended: 8,
      Sleep: 6,
      Nap: 0,
    },
    {
      date: "Thu",
      Recommended: 8,
      Sleep: 5,
      Nap: 0,
    },
    {
      date: "Fri",
      Recommended: 8,
      Sleep: 10,
      Nap: 0,
    },
    {
      date: "Sat",
      Recommended: 8,
      Sleep: 7,
      Nap: 0,
    },
    {
      date: "Sun",
      Recommended: 8,
      Sleep: 8.5,
      Nap: 2,
    },
  ];

  const timePickerStyle = {
    marginRight: 20,
    width: 100,
  };
  return (
    <ThemeProvider theme={theme}>
      <Box mt={5}>
        <Grid container direction="column" justify="center" alignItems="center">
          <ComposedChart
            style={{ marginLeft: -50 }}
            width={400}
            height={300}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sleep" stackId="a" fill="#3f51b5" />
            <Bar dataKey="Nap" stackId="a" fill="#5DA9E9" />
            <Line
              dataKey="Recommended"
              stroke="#D1345B"
              dot={false}
              activeDot={false}
            />
          </ComposedChart>

          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box mt={5}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <TimePicker
                  clearable
                  autoOk
                  ampm={false}
                  label="From"
                  value={fromTime}
                  onChange={setFromTime}
                  style={timePickerStyle}
                />
                <TimePicker
                  clearable
                  autoOk
                  ampm={false}
                  label="To"
                  value={toTime}
                  onChange={setToTime}
                  style={timePickerStyle}
                />
                <Button variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </Box>
          </MuiPickersUtilsProvider>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
