import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../lib');

const renderer = create(h);
const {jsx} = renderer;

const RedBorder = jsx('div', {
  border: '1px solid red'
});

storiesOf('jsx()', module)
    .add('Default', () =>
        h(RedBorder, null, 'Hello world')
    )
    .add('Custom CSS', () =>
        h(RedBorder, {css: {fontWeight: 'bold'}}, 'Hello world')
    )
    .add('Inline styles', () =>
        h(RedBorder, {style: {color: 'red'}, css: {fontWeight: 'bold'}}, 'Hello world')
    )
