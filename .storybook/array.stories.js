import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonArray} = require('../addon/array');

const renderer = create({h});
addonRule(renderer);
addonArray(renderer);
const {rule} = renderer;

const cn1 = rule({
    display: ['flex', '-webkit-flex'],
});

const cn2 = rule([
    {
        color: 'red'
    },
    {
        border: '1px solid green'
    }
]);

storiesOf('Addons/array', module)
    .add('Value array', () =>
        h('div', {className: cn1}, 'Value as array')
    )
    .add('CSS-like object array', () =>
        h('div', {className: cn2}, 'CSS-like object array')
    )
