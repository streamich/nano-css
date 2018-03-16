import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonKeyframes} = require('../addon/keyframes');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonJsx} = require('../addon/jsx');

const renderer = create({h});
addonKeyframes(renderer);
addonRule(renderer);
addonJsx(renderer);
const {jsx} = renderer;

const RedBorder = jsx('div', {
  border: '1px solid red'
});

const Block = jsx('div', {
    'text-align': 'center'
});

const Button = jsx('button', {
    background: 'red',
    width: '320px',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none',
    ':hover': {
        color: '#fff',
    },
    ':active': {
        position: 'relative',
        top: '2px',
    },
    '@media (max-width: 480px)': {
        width: '160px',
    }
});

const ButtonYellow = jsx(Button, {
    color: 'yellow'
});

storiesOf('Addons/jsx()', module)
    .add('Default', () =>
        h(RedBorder, null, 'Hello world')
    )
    .add('Custom CSS', () =>
        h(RedBorder, {css: {fontWeight: 'bold'}}, 'Hello world')
    )
    .add('Inline styles', () =>
        h(RedBorder, {style: {color: 'red'}, css: {fontWeight: 'bold'}}, 'Hello world')
    )
    .add('Button', () =>
        h(Block, null,
            h(Button, null, 'Click me!')
        )
    )
    .add('Composition', () =>
        h(Block, null,
            h(ButtonYellow, null, 'Click me!')
        )
    )
