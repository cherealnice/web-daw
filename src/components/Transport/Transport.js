import React from 'react';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';
import { identity as id, compose } from 'ramda';

import propsMapper from './props';
import * as S from './styles';

import TransportButton from '../TransportButton';
import TransportTimer from '../TransportTimer';

const enhance = compose(
  mapProps(propsMapper),
);

const propTypes = {
  onStop: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onRecord: PropTypes.func,
  currentSample: PropTypes.number,
};

const defaultProps = {
  onStop: id,
  onPlay: id,
  onPause: id,
  onRecord: id,
  currentSample: 0,
};

const Transport = ({
  onStop,
  onPlay,
  onPause,
  onRecord,
  currentSample,
}) => (
  <S.OuterContainer>
    <S.InnerContainer>
      <TransportButton type="record" onClick={onRecord} />
      <TransportButton type="play" onClick={onPlay} />
      <TransportButton type="pause" onClick={onPause} />
      <TransportButton type="stop" onClick={onStop} />
      <TransportTimer currentSample={currentSample} />
    </S.InnerContainer>
  </S.OuterContainer>
);

Transport.propTypes = propTypes;
Transport.defaultProps = defaultProps;

export default enhance(Transport);
