import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonAtoms} = require('../addon/atoms');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonKeyframes} = require('../addon/keyframes');

const renderer = create({
    pfx: 'animations-'
});
addonAtoms(renderer);
addonRule(renderer);
addonKeyframes(renderer);
const {rule, keyframes} = renderer;

var styles = {
    w: '10px',
    h: '30px',
    bg: 'black',
    mar: '20px',
    animation: 'spinner-rotate-bar 1.2s infinite linear',
    '@keyframes spinner-rotate-bar': {
        to: {
            transform: 'rotate(359.9deg)'
        }
    },
};

const className = rule(styles);

var animation1 = keyframes({
    to: {
        transform: 'rotate(359deg)'
    }
});

var animation2 = keyframes({
    to: {
        transform: 'rotate(358deg)'
    }
}, 'rotator');

storiesOf('Addons/keyframes()', module)
    .add('Bar spinner', () =>
        h('div', {className}, '')
    )
    .add('keyframes() hash', () =>
        h('div', {style: {background: 'red', width: 10, height: 10, animation: animation1 + ' 1s infinite linear'}}, '')
    )
    .add('keyframes() custom name', () =>
        h('div', {style: {background: 'red', width: 10, height: 10, animation: animation2 + ' 1s infinite linear'}}, '')
    )
