import React from 'react';
import PropTypes from 'prop-types';

import Graph from './Graph';
import dft from '../utils/dft';

const DFT = ({ data }) => {
  const prepData = data[0] ? data.map(d => d.uv) : [];
  const dftData = dft(prepData);
  const list = dftData[0]
    ? dftData
        .filter((d, i) => i < 500)
        .map((d, i) => ({ name: (i / 500) * 96, uv: d.im }))
    : [];
  console.log(dftData);
  console.log(list);
  return <Graph data={list} />;
};

DFT.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DFT;
