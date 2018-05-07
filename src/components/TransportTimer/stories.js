import React from 'react';

import TransportTimer from './TransportTimer';

export default [
  {
    name: 'at zero',
    story: () => <TransportTimer />,
  },
  {
    name: 'with time',
    story: () => <TransportTimer currentSample={2348953} />,
  },
];