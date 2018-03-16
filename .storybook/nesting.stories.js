import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonNesting} = require('../addon/nesting');

const renderer = create({h});
addonRule(renderer);
addonNesting(renderer);
const {rule} = renderer;

const className = rule({
    border: '1px solid red',
    '&:hover': {
        fontWeight: 'bold'
    },
    '&>span': {
        color: 'red',
    },
}, 'nesting');

storiesOf('Addons/Nesting', module)
    .add('Default', () =>
        h('div', {className}, 'Hover ', h('span', null, 'me!'))
    )
