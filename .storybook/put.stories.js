import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create();
const {put} = renderer;

put('red-border', {
  border: '1px solid red',
  ':hover': {
      fontWeight: 'bold'
  },
  span: {
      color: 'red'
  }
});

storiesOf('Addons/put()', module)
  .add('Default', () =>
    h('div', {className: 'red-border'}, 'Hello world')
  )
  .add('Nesting', () =>
    h('div', {className: 'red-border'}, 'Hello ', h('span', null, 'world'))
  )
