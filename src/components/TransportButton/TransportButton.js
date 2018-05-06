import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import styled from 'react-emotion';

const MainButton = styled.button`
  size: ${({ size }) => `${size}px`};
  border: blue;
`;

const typeToAscii = {
  play: '►',
  pause: '▌▌',
  stop: '■',
};

const sizeAdjustor = {
  play: 0,
  pause: -4,
  stop: 8,
};

const propsMapper = props => ({
  onClick: props.onClick,
  size: props.size + sizeAdjustor[props.type],
  content: typeToAscii[props.type],
});

const enhance = mapProps(propsMapper)

const propTypes = {
  content: PropTypes.oneOf([
    '►',
    '▌▌',
    '■',
  ]),
  onClick: PropTypes.func,
  size: PropTypes.number,
};

const defaultProps = {
  type: 'play',
  onClick: null,
  size: 16,
};

const TransportButton = ({
  content,
  onClick,
  size,
}) => (
  <MainButton size={size} onClick={onClick}>
    {content}
  </MainButton>
);

TransportButton.propTypes = propTypes;
TransportButton.defaultProps = defaultProps;

export default enhance(TransportButton);