import React from 'react';
import PropTypes from 'prop-types';
import { compose, mapProps } from 'recompose';

import { MainButton } from './styles';
import propsMapper from './props';

const enhance = compose(
  mapProps(propsMapper),
);

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  type: PropTypes.oneOf([
    'play',
    'pause',
    'stop',
  ]),
  color: PropTypes.oneOf([
    'green',
    'red',
    'orange',
  ]),
};

const defaultProps = {
  onClick: null,
  size: 16,
  type: 'play',
  color: 'green',
};

const TransportButton = ({
  children,
  onClick,
  size,
  type,
  color,
}) => (
  <MainButton
    type={type}
    size={size}
    onClick={onClick}
    color={color}
  >
    {children(type)}
  </MainButton>
);

TransportButton.propTypes = propTypes;
TransportButton.defaultProps = defaultProps;

export default enhance(TransportButton);