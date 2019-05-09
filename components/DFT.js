import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';
import dft from '../utils/dft';

/**
 * Filters and runs data through a dft.
 *
 * @param {number[]} data accepts one data arry with the length of 1000
 *
 * @return {number[]} returns a numberarray consisting of the imaginary values of the DFT
 */
const DFT = ({ data }) => {
  // filters and apply a dft to the data set. Only works with datasets of n=1000
  const prepData = data[0] ? data.map(d => d.uv) : [];
  const dftData = dft(prepData);
  const list = dftData[0]
    ? dftData
        .filter((d, i) => i < 500)
        .map((d, i) => ({ name: (96 / 500) * i, uv: d.re }))
    : [];
  console.log(dftData);
  console.log(list);
  return <Graph data={list} />;
};

DFT.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DFT;
