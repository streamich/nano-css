import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create();
const {putRaw} = renderer;

putRaw(`
    .red-border-raw {
        border: 1px solid red;
    }
`);
putRaw(`
    .red-border-raw:hover {
      font-weight: bold;
    }
`);
putRaw(`
    .red-border-raw span {
      color: red;
    }
`);

storiesOf('Addons/putRaw()', module)
  .add('Default', () =>
    h('div', {className: 'red-border-raw'}, 'Hello world')
  )
  .add('Nesting', () =>
    h('div', {className: 'red-border-raw'}, 'Hello ', h('span', null, 'world'))
  )
