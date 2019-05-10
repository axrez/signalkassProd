import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';
import ComplexNumber from '../utils/ComplexNumber';
import fft from '../utils/fft';

/**
 * Filters and runs data through a dft.
 *
 * @param {number[]} data accepts one data arry with the length of 1000
 *
 * @return {number[]} returns a numberarray consisting of the real values of the FFT
 */
const FFT = ({ data }) => {
  // filters and apply a fft to the data set. Only works with datasets of n=1000
  const prepData = data[0]
    ? data.map(d => new ComplexNumber({ re: d.uv, im: 0 }))
    : [];
  const fftData = fft(prepData);
  const list = fftData[0]
    ? fftData
        .filter((d, i) => i < 1024)
        .map((d, i) => ({ name: (96 / 1024) * i, uv: d.re }))
    : [];
  list.shift();
  return <Graph data={list} />;
};

FFT.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FFT;
