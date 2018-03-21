import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const nano = create({
    pfx: 'test-',
    h: require('react').createElement
});
require('../addon/rule').addon(nano);
require('../addon/virtual').addon(nano);
require('../addon/sheet').addon(nano);
require('../addon/jsx').addon(nano);

const className1 = nano.rule({
    border: '1px solid red',
    color: 'blue',
});

const className2 = nano.rule({
    border: '1px solid red',
    color: 'pink',
    ':hover': {
        color: 'green'
    }
});

const styles1 = nano.sheet({
    button: {
        border: '1px solid blue',
        color: 'blue'
    }
});

const Button = nano.jsx('button', {
    color: 'red',
    border: '1px solid blue',
    ':hover': {
        background: 'blue',
        color: 'white',
    }
});

storiesOf('Addons/virtual', module)
    .add('Default', () =>
        h('div', {className: className1}, 'Hello world')
    )
    .add('Default 2', () =>
        h('div', {className: className2}, 'Hello world 2')
    )
    .add('sheet()', () =>
        h('div', {className: styles1.button}, 'sheet()')
    )
    .add('jsx()', () =>
        h(Button, {}, 'Click me!')
    )
