import React from "react";
import { testData } from "./testData";
// import { TimePicker } from "antd";
// import { Button } from "antd";
// import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ComposedChart,
  Line,
} from "recharts";
import "./App.css";
import moment from "moment";

function App() {
  const format = "HH:mm";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const data = [
    {
      date: "Monday",
      rec: 8,
      sleep: 7.5,
      nap: 1,
    },
    {
      date: "Tuesday",
      rec: 8,
      sleep: 9,
      nap: 0,
    },
    {
      date: "Wednesday",
      rec: 8,
      sleep: 6,
      nap: 0,
    },
    {
      date: "Thursday",
      rec: 8,
      sleep: 8.5,
      nap: 0,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div
          style={{
            margin: "50px auto 0",
            width: "fit-content",
          }}
        >
          <ComposedChart
            width={500}
            height={300}
            data={data}
            // margin={{
            //   top: 5,
            //   right: 20,
            //   left: 20,
            //   bottom: 5,
            // }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            {/* <Tooltip /> */}
            <Legend />
            <Bar dataKey="sleep" stackId="a" fill="#1E90FF" />
            <Bar dataKey="nap" stackId="a" fill="#00BFFF" />
            <Line
              dataKey="rec"
              stroke="#7B68EE"
              dot={false}
              activeDot={false}
            />
          </ComposedChart>
          <div
            style={{
              margin: "30px 0 0 30px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <TimePicker
            style={{ marginRight: 10 }}
            defaultValue={moment("22:00", format)}
            format={format}
          />
          <ArrowRightOutlined />
          <TimePicker
            style={{ marginLeft: 10 }}
            defaultValue={moment("07:00", format)}
            format={format}
          />
        <Button type="primary">Add</Button> */}
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
            <Button color="primary">Add</Button>
          </div>
        </div>
      </div>
      <div>Hello</div>
    </ThemeProvider>
  );
}

export default App;
