import styled from 'react-emotion';

export const OuterContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
`;

export const InnerContainer = styled('div')`
  border: 2px solid black;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  flex: 1;
`