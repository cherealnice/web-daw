import React from 'react';

import TransportButton from './TransportButton';

const onClickLogger = () => console.log('I was clicked');

export default [
  {
    name: 'play',
    story: () => <TransportButton type="play" onClick={onClickLogger}/>,
  },
  {
    name: 'pause',
    story: () => <TransportButton type="pause" onClick={onClickLogger}/>,
  },
  {
    name: 'stop',
    story: () => <TransportButton type="stop" onClick={onClickLogger}/>,
  },
];