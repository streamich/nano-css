import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonStylis} = require('../addon/stylis');

const renderer = create({h});
addonStylis(renderer);
const {jsx} = renderer;

storiesOf('Addons/stylis', module)
    .add('Default', () =>
        h('div', null, 'Hello world')
    )
