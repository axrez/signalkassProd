import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Graph from './Graph';
import DataTabel from './DataTabel';
import FFT from './FFT';
import extractData from '../utils/extractData';

import { GraphWrapper, ContentWrapper, TabelWrapper } from './styled';

const MapURI = '/api/client/map';
const GraphURI = '/api/client';
const SpeceficURI = '/api/client/specefic';

const FetchData = () => {
  const [date, setDate] = useState([]);
  const [graph, setGraph] = useState([]);
  useEffect(() => {
    // fetch the data table
    const fetchnMap = async () => {
      const { data: body } = await axios.get(MapURI);
      // Map it to an array of dates
      const tempDate = body.map(e => e.created);
      setDate(tempDate);
    };

    // Fetch the default view for the graph
    const fetchGraph = async () => {
      const { data } = await axios.get(GraphURI);
      setGraph(extractData(data));
    };

    fetchnMap().catch(err => console.log(err));
    fetchGraph().catch(err => console.log(err));
  }, []);

  const fetchNew = async e => {
    // Fetch a new dataset for the graph when the user selects it.
    const dateNow = e.target.id;
    const { data } = await axios.post(SpeceficURI, { created: dateNow });
    const newGraph = data;
    setGraph(extractData(newGraph));
  };

  return (
    <ContentWrapper>
      <TabelWrapper>
        <DataTabel data={date} click={fetchNew} />
      </TabelWrapper>
      <GraphWrapper>
        <Graph data={graph.filter((d, i) => i < 100)} transform={false} />
      </GraphWrapper>
      <GraphWrapper>
        <FFT data={graph} />
      </GraphWrapper>
    </ContentWrapper>
  );
};
export default FetchData;
