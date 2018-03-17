import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonKeyframes} = require('../addon/keyframes');
const {addon: addonFadeIn} = require('../addon/animate/fadeIn');

const nano = create();
addonRule(nano);
addonKeyframes(nano);
addonFadeIn(nano);
const {rule} = nano;

var className = rule({
    width: '200px',
    height: '200px',
    background: 'red',
});

storiesOf('Addons/Animate', module)
    .add('fadeIn', () =>
        h('div', {className: 'fadeIn' + className}, 'Hello world')
    )
