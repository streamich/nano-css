import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonPrefixer} = require('../addon/prefixer');

const renderer = create();
addonRule(renderer);
addonPrefixer(renderer);
const {rule} = renderer;

const className1 = rule({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 5px red',
    'text-shadow': '2px 2px #ff0000',
});

storiesOf('Addons/prefixer', module).add('Default', () => h('div', {className: className1}, 'Hello world'));
