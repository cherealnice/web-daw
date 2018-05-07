import React from 'react';

import Transport from './Transport';

const onClick = x => () => console.warn(`${x} click`)

export default [
  {
    name: 'default',
    story: () => (
      <Transport
        onRecord={onClick('record')}
        onPlay={onClick('play')}
        onPause={onClick('pause')}
        onStop={onClick('stop')}
        currentSample={90325702}
      />
    ),
  },
];