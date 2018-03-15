import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonStable} = require('../addon/stable');

const renderer = create({h});
addonRule(renderer);
addonStable(renderer);
const {rule} = renderer;

const className = rule({
    bd: '1px solid red'
}, 'atoms');

storiesOf('Addons/Stable hash', module)
    .add('Default', () =>
        h('div', {className}, 'Red')
    )
