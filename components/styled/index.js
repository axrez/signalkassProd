import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    tabel graph
    tabel graph;
  margin-top: 5vh;
`;

export const GraphWrapper = styled.div`
  max-width: 80vw;
  height: 30vh;
`;

export const TabelWrapper = styled.div`
  grid-area: 1 / 1 / span 2 / span 1;
  color: white;
`;
