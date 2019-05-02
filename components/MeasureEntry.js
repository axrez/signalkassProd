import styled, { css } from 'styled-components';

export const MeasureEntry = styled.li`
  background: #333;
  list-style: none;
  color: white;
  padding: 1rem;
  margin: 0.2rem;
  width: fit-content;

  ${props =>
    props.active &&
    css`
      background: #555;
    `}

  :hover {
    background: #444;
    cursor: pointer;
  }
`;
