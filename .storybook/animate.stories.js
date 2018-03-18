import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonKeyframes} = require('../addon/keyframes');

const animations = [
    'fadeIn',
    'fadeInDown',
    'fadeInScale',
    'fadeOut',
    'fadeOutScale',
];

const nano = create();
addonRule(nano);
addonKeyframes(nano);
const {rule} = nano;

var className = rule({
    width: '200px',
    height: '200px',
    background: 'red',
});

let stories = storiesOf('Addons/Animate', module);

animations.forEach(name => {
    stories = stories.add(name, () => {
        require('../addon/animate/' + name).addon(nano);
        return h('div', {className: name + className});
    });
});
