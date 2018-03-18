import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonPrefixer} = require('../addon/inline-style-prefixer');

const renderer = create();
addonRule(renderer);
addonPrefixer(renderer);
const {rule} = renderer;

const className1 = rule({
    alignItems: 'center'
});

storiesOf('Addons/inline-style-prefixer', module)
  .add('Default', () =>
    h('div', {className: className1}, 'Hello world')
  )
