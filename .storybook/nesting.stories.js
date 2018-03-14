import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../lib');
const {addon} = require('../addon/nesting');

const renderer = create({h});
addon(renderer);
const {rule} = renderer;

const className = rule({
    border: '1px solid red',
    '&:hover': {
        fontWeight: 'bold'
    }
}, 'nesting');

storiesOf('Addons/Nesting', module)
    .add('Default', () =>
        h('div', {className}, 'Hover me!')
    )
