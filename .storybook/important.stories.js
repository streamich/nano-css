import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonImportant} = require('../addon/important');

const renderer = create();
addonRule(renderer);
addonImportant(renderer);
const {rule} = renderer;

const className1 = rule({
    border: '1px solid red'
}, 'RedBorderImportant');

const className2 = rule({
    border: '1px solid red !important'
}, 'RedBorderImportantImportant');

storiesOf('Addons/!important', module)
    .add('Default', () =>
        h('div', {className: className1}, 'Hello world')
    )
    .add('Double !important', () =>
        h('div', {className: className2}, 'Hello world')
    )
