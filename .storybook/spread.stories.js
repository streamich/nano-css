import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon} = require('../addon/spread');

const renderer = create();
addon(renderer);
const {spread} = renderer;

const rule = spread({
  border: '1px solid red'
}, 'RedBorder');

storiesOf('Addons/spread()', module)
  .add('As class name', () =>
    h('div', {className: rule}, 'Hello world')
  )
  .add('As data attribute', () =>
    h('div', rule, 'Hello world')
  )
