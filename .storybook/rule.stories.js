import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon} = require('../addon/rule');

const nano = create();
addon(nano);
const {rule} = nano;

const className1 = rule({
  border: '1px solid red'
}, 'RedBorder');

// Chech if generating multiple times same styles result in clash of CSS selector.
rule({
  border: '1px solid red'
}, 'Rule');
rule({
  border: '1px solid red'
}, 'Rule');

storiesOf('Addons/rule()', module)
  .add('Default', () =>
    h('div', {className: className1}, 'Hello world')
  )
