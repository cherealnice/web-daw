import styled from 'react-emotion';

export const Container = styled('span')`
  display: inline-flex;
  letter-spacing: 0.2em;
  justify-content: center;
  flex-direction: column;
  font-size: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size * 3}px`};
  padding: 8px;
  border: 4px outset grey;
  border-radius: 6px;
  background: black;
  color: green;
  box-sizing: border-box;
`;
