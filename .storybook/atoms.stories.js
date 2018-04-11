import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonAtoms} = require('../addon/atoms');

const renderer = create({h});
addonRule(renderer);
addonAtoms(renderer);
const {rule} = renderer;

const className = rule(
    {
        bd: '1px solid red',
    },
    'atoms'
);

storiesOf('Addons/Atoms', module).add('Default', () => h('div', {className}, 'Red'));
