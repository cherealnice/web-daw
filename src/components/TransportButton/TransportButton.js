import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { compose, identity as id } from 'ramda';

import * as S from './styles';
import propsMapper from './props';

const enhance = compose(
  mapProps(propsMapper),
);

const propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  type: PropTypes.oneOf([
    'record',
    'play',
    'pause',
    'stop',
  ]),
  color: PropTypes.oneOf([
    'blue',
    'green',
    'red',
    'orange',
  ]),
  children: PropTypes.func,
};

const defaultProps = {
  onClick: null,
  size: 16,
  type: 'play',
  color: 'green',
  children: id,
};

const TransportButton = ({
  children,
  onClick,
  size,
  type,
  color,
}) => (
  <S.MainButton
    type={type}
    size={size}
    onClick={onClick}
    color={color}
  >
    {children(type)}
  </S.MainButton>
);

TransportButton.propTypes = propTypes;
TransportButton.defaultProps = defaultProps;

export default enhance(TransportButton);