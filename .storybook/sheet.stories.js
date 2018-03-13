import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../lib');
const {addonSheet} = require('../addon/sheet');

const renderer = create(h);
addonSheet(renderer);
const {sheet} = renderer;

const styles = sheet({
    tomato: {
        bd: '1px solid tomato',
    },
    yellow: {
        bd: '1px solid yellow',
    },
}, 'hello');


const styles2 = renderer.sheet({
    tomato: {
        bd: '1px solid tomato',
    },
    yellow: {
        bd: '1px solid yellow',
    },
});

storiesOf('sheet()', module)
    .add('Default', () =>
        h('div', null,
            h('div', {className: styles.tomato}, 'Red'),
            h('div', {className: styles.yellow}, 'Yellow'),
        )
    )
    .add('No block name', () =>
        h('div', null,
            h('div', {className: styles2.tomato}, 'Red'),
            h('div', {className: styles2.yellow}, 'Yellow'),
        )
    )
