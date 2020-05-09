import React from "react";
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

export const Chart = ({ data, userName }) => {
  return (
    <>
      <h1>{userName}'s Sleep Stats</h1>
      <ComposedChart
        style={{ marginLeft: -50, marginTop: 20 }}
        width={360}
        height={300}
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey="day" />
        <YAxis ticks={[0, 2, 4, 6, 8, 10, 12]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sleep" stackId="a" fill="#3f51b5" />
        <Bar dataKey="Nap" stackId="a" fill="#5DA9E9" />
        <Line
          strokeWidth={2}
          strokeDasharray="5 10"
          legendType="star"
          dataKey="Recommended"
          stroke="#D1345B"
          dot={false}
          activeDot={false}
        />
      </ComposedChart>
    </>
  );
};
