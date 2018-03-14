import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonDrule} = require('../addon/drule');
const {addon: addonCache} = require('../addon/cache');

const renderer = create();
addonCache(renderer);
addonRule(renderer);
addonDrule(renderer);
const {drule} = renderer;

const className1 = drule({
  border: '1px solid red'
}, 'RedBorder');

storiesOf('drule()', module)
  .add('Default', () =>
    h('div', {className: '' + className1}, 'Hello world')
  )
  .add('Dynamic styles', () =>
    h('div', null,
        h('div', {className: className1({fontWeight: 'bold'})}, 'Hello world'),
        h('div', {className: className1({color: 'blue'})}, 'Hello world')
    )
  )
