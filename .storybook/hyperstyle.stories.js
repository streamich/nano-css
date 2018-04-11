import {createElement} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonSheet} = require('../addon/sheet');
const {addon: addonHyperstyle} = require('../addon/hyperstyle');

const renderer = create({h: createElement});
addonRule(renderer);
addonSheet(renderer);
addonHyperstyle(renderer);
const {hyperstyle} = renderer;

const h = hyperstyle(
    {
        tomato: {
            border: '1px solid tomato',
        },
        yellow: {
            border: '1px solid yellow',
        },
    },
    'hello'
);

storiesOf('Addons/hyperstyle()', module).add('Default', () =>
    h('div', null, h('div', {styleName: 'tomato'}, 'Red'), h('div', {styleName: 'yellow'}, 'Yellow'))
);
