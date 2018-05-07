import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { identity as id, compose } from 'ramda';

import { withAudioEngineProps } from '../../enhancers';

import propsMapper from './props';
import * as S from './styles';

const enhance = compose(
  mapProps(propsMapper),
  withAudioEngineProps,
);

const propTypes = {
  currentSample: PropTypes.number,
  children: PropTypes.func,
  sampleRate: PropTypes.number,
  bitRate: PropTypes.number,
  size: PropTypes.number,
};

const defaultProps = {
  currentSample: 0,
  children: id,
  sampleRate: 44100,
  bitRate: 16,
  size: 16,
};

const TransportTimer = ({
  sampleRate,
  currentSample,
  children,
  size,
}) => (
  <S.Container size={size} >
    {children({ currentSample, sampleRate })}
  </S.Container>
);

TransportTimer.propTypes = propTypes;
TransportTimer.defaultProps = defaultProps;

export default enhance(TransportTimer);
