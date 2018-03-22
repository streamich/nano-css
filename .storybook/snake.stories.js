import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonCache} = require('../addon/cache');
const {addon: addonSnake} = require('../addon/snake');

const nano = create({h});
addonRule(nano);
addonCache(nano);
addonSnake(nano, {
    inline: function () {
        this.display = 'inline';
    },

    cornerRadius: function (value) {
        this.borderRadius = value;
    },

    style: 'fontStyle'
});

const {s} = nano;

const redBorderClass = nano.rule(
    s.bd('1px solid red').obj
);

const lazy = s.ta('center');

storiesOf('Addons/snake', module)
    .add('Inside rule()', () =>
        h('div', {className: redBorderClass}, 'Hello world')
    )
    .add('Evaluate inline', () =>
        h('div', {className: s.col('blue')}, 'Hello world')
    )
    .add('Lazy evaluate', () =>
        h('div', {className: lazy}, 'Hello world')
    )
    .add('Getters', () =>
        h('div', {className: s.bgBlack.col('pink').inline.pointer.cornerRadius('4px').style('italic').bold}, 'Hello world')
    )
