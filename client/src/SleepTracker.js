import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { Chart } from "./components/Chart";
import { Form } from "./components/Form";
import Logout from "./components/Logout";
import moment from "moment";
import { connect } from "react-redux";
import { getItems, deleteItem, addItem, editItem } from "./actions/itemActions";

const SleepTracker = ({
  item,
  getItems,
  deleteItem,
  addItem,
  editItem,
  auth,
}) => {
  const { items } = item;

  useEffect(() => {
    getItems(auth.user._id);
  }, [getItems, auth.user._id]);

  useEffect(() => {
    const newChartData = items.map((item) => {
      return {
        date: item.date,
        day: moment(item.date).format("ddd"),
        Recommended: 8,
        Sleep: item.sleep,
        Nap: item.nap,
      };
    });

    setChartData(newChartData);
  }, [items]);

  const [chartData, setChartData] = useState(items);

  return (
    <Box>
      <Grid container direction="column" justify="center" alignItems="center">
        <Chart
          userName={auth.user.name}
          data={chartData.slice(Math.max(items.length - 7, 0))}
        />
        <Form
          userId={auth.user._id}
          addItem={addItem}
          deleteItem={deleteItem}
          editItem={editItem}
          data={items}
        />
        <Logout />
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getItems,
  deleteItem,
  addItem,
  editItem,
})(SleepTracker);
