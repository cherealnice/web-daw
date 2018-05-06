import React from 'react';
import { storiesOf } from '@storybook/react';

import components from '../components/registry';

components.forEach(componentName => {
  const stories = require(`../components/${componentName}/stories`);

  stories.default.forEach(story => (
    storiesOf(componentName, module).add(story.name, story.story)
  ));
});
