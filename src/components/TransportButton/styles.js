import styled from 'react-emotion';

export const MainButton = styled('button')`
  font-size: ${({ size }) => `${size}px`};
  border: 4px outset grey;
  border-radius: 6px;
  height: ${({ size }) => `${size * 3}px`};
  width: ${({ size }) => `${size * 3}px`};
  font-weight: ${({ type }) => (type === 'pause' ? 'bolder' : 'normal')};
  color: ${({ color }) => `dark${color}`};
  background: grey;
  cursor: pointer;

  :active {
    color: ${({ color }) => color};
    border-style: inset;
    border-color: dimgray;
    background: dimgray;
  }
`;
