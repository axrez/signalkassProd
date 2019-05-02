import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';

const Graph = ({ data }) => {
  // Check if the data exists and map it to a list of data objects or return an empty array
  const list = data[0]
    ? data[0].data.map((d, i) => ({
        name: i,
        uv: d,
      }))
    : [];

  // Render the graph
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={list}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="1500 1500" />
        <XAxis tick={false} />
        <YAxis />
        {data.length > 100 ? null : <Tooltip />}
        <Line type="monotone" dataKey="uv" stroke="#23382b" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

Graph.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Graph;
