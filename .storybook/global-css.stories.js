import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: resetEricMeyerCondensed} = require('../addon/reset/EricMeyerCondensed');

const nano = create();
resetEricMeyerCondensed(nano);

storiesOf('CSS resets', module)
  .add('Eric Meyer - condensed', () =>
    h('div', null, 'Hello world')
  )
