import React, { useState } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import moment from "moment";

export const Form = ({ data, deleteItem, addItem, userId, editItem }) => {
  const [sleepTime, setSleepTime] = useState({
    from: new Date("2020-01-01T23:00:00"),
    to: new Date("2020-01-02T07:00:00"),
  });

  const [napTime, setNapTime] = useState({
    from: new Date("2020-01-02T14:00:00"),
    to: new Date("2020-01-02T15:00:00"),
  });

  const [showNap, setShowNap] = useState(false);

  const getSleepTime = (from, to) => {
    return ((to - from) / 3600000) % 24;
  };

  const submitSleep = () => {
    const newItem = {
      user_id: userId,
      sleep: getSleepTime(sleepTime.from, sleepTime.to),
      nap: 0,
    };

    addItem(newItem);
  };

  const submitNap = () => {
    const newItem = {
      user_id: userId,
      sleep: getSleepTime(sleepTime.from, sleepTime.to),
      nap: getSleepTime(napTime.from, napTime.to),
    };

    setShowNap(false);
    editItem(newItem);
  };

  const removeLastItem = () => {
    deleteItem(data.pop()._id);
  };

  const Pickers = ({ type }) => {
    const timePickerStyle = {
      marginRight: 20,
      width: 100,
    };

    const config = {
      from: type === "sleep" ? sleepTime.from : napTime.from,
      to: type === "sleep" ? sleepTime.to : napTime.to,
      set: type === "sleep" ? setSleepTime : setNapTime,
      submit: type === "sleep" ? submitSleep : submitNap,
    };

    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <TimePicker
          clearable
          autoOk
          ampm={false}
          label="From"
          value={config.from}
          onChange={(e) => config.set({ from: e._d, to: config.to })}
          style={timePickerStyle}
        />
        <TimePicker
          clearable
          autoOk
          ampm={false}
          label="To"
          value={config.to}
          onChange={(e) => config.set({ from: config.from, to: e._d })}
          style={timePickerStyle}
        />
        <Fab
          fontSize="small"
          onClick={() => config.submit()}
          color="primary"
          style={{ width: 50, height: 50 }}
        >
          <AddIcon fontSize="small" />
        </Fab>
      </Grid>
    );
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box mt={3}>
        <Grid container direction="column" justify="center" alignItems="center">
          {/* check if sleep is filled */}
          {data.length > 0 &&
          moment(data[data.length - 1].date).format("MMM Do YY") ===
            moment().format("MMM Do YY") ? (
            <>
              <Box textAlign="center" display={showNap ? "none" : "block"}>
                <h2>Have a nice day!</h2>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => removeLastItem()}
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>

              {/* check if nap is filled */}
              {data[data.length - 1].nap === 0 && (
                <>
                  <Box display={showNap ? "none" : "block"} mt={3}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <h3>Had a nap today?</h3>
                      <Box ml={1}>
                        <Fab
                          fontSize="small"
                          onClick={() => setShowNap(true)}
                          color="primary"
                          style={{ width: 35, height: 35 }}
                        >
                          <AddIcon fontSize="small" />
                        </Fab>
                      </Box>
                    </Grid>
                  </Box>
                  {showNap && (
                    <>
                      <Box>
                        <Box mb={1}>
                          <h3>Add nap time</h3>
                        </Box>
                        <Pickers type="nap" />
                      </Box>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {/* default state */}
              <Box>
                <Box mb={1}>
                  <h3>Add sleep time</h3>
                </Box>
                <Pickers type="sleep" />
              </Box>
            </>
          )}
        </Grid>
      </Box>
    </MuiPickersUtilsProvider>
  );
};
