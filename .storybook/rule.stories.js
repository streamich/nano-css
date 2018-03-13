import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../lib');

const renderer = create(h);
const {rule} = renderer;

const className1 = rule({
  border: '1px solid red'
}, 'RedBorder');

storiesOf('rule()', module)
  .add('Default', () =>
    h('div', {className: className1}, 'Hello world')
  )
