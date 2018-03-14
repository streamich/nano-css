import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonSheet} = require('../addon/sheet');
const {addon: addonDsheet} = require('../addon/dsheet');
const {addon: addonCache} = require('../addon/cache');

const renderer = create();
addonCache(renderer);
addonSheet(renderer);
addonDsheet(renderer);
const {dsheet} = renderer;

const styles = dsheet({
    block: {
        border: '1px solid red'
    }
});

storiesOf('dsheet()', module)
    .add('Default', () =>
        h('div', {className: '' + styles.block}, 'Hello world')
    )
    .add('Dynamic', () =>
        h('div', null,
            h('div', {className: styles.block({color: 'red'})}, 'Hello world'),
            h('div', {className: styles.block({color: 'green'})}, 'Hello world'),
        )
    )
