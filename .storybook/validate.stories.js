import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const nano = create();
require('../addon/rule').addon(nano);
require('../addon/validate').addon(nano);
const {rule} = nano;

const className1 = rule({
  border: '1px solid red'
}, 'validate1');

const className2 = rule({
    border: '1px solid rred'
  }, 'validate2');

storiesOf('Addons/validate', module)
  .add('No error', () =>
    h('div', {className: className1}, 'Hello world')
  )
  .add('Error', () =>
    h('div', {className: className2}, 'Hello world')
  )
