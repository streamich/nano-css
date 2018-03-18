import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonStylis} = require('../addon/stylis');
const {addon: addonRule} = require('../addon/rule');

const renderer = create({h});
addonStylis(renderer);
addonRule(renderer);
const {rule} = renderer;

const className = rule(`
    color: red;
    &:hover {
        color: blue;
    }
`);

storiesOf('Addons/stylis', module)
    .add('Default', () =>
        h('div', {className}, 'Hello world')
    )
