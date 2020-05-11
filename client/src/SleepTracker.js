import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
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
        Sleep: Math.round(item.sleep * 100) / 100,
        Nap: Math.round(item.nap * 100) / 100,
      };
    });

    setChartData(newChartData);
  }, [items]);

  const [chartData, setChartData] = useState(items);

  return (
    <Box
      style={{ height: "calc(100vh - 80px)" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
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
      </Box>
      <Box mt={3}>
        <Logout />
      </Box>
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
