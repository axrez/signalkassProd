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

/**
 * Returns a graphelement based on the input data
 * @param {Number[]} data an array of values corresponding to equally spaced y-values
 * @param {bool} transform Optional, changes a few things if the graph is precenting a fourier transform
 */
const Graph = ({ data, transform }) => (
  // Render the graph
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="1500 1500" />
      <XAxis
        tick={transform}
        dataKey="name"
        unit="Hz"
        scale={transform ? 'log' : 'linear'}
      />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#23382b" dot={false} />
    </LineChart>
  </ResponsiveContainer>
);
Graph.propTypes = {
  data: PropTypes.array.isRequired,
  transform: PropTypes.bool,
};

export default Graph;
