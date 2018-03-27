import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRef} = require('../addon/ref');

const nano = create();

addonRef(nano);

const css = nano.createRef();

storiesOf('Addons/ref', module)
    .add('Default', () =>
        h('div', css({'&': {color: 'red'}, '&:hover': {color: 'blue'}}), 'Hello world')
    )
