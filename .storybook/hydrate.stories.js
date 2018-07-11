import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonHydrate} = require('../addon/hydrate');

const nano1 = create();
nano1.put('.hydrate-test', {color: 'red'});

const nano2 = create({
    sh: nano1.sh
});
addonHydrate(nano2);
// nano2.hydrate(nano1.sh);
nano2.put('.hydrate-test', {color: 'red'});

storiesOf('Addons/hydrate()', module)
  .add('Default', () =>
    h('div', {}, 'Should log hydration info')
  )
