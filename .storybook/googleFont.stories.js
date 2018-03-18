import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonGoogleFont} = require('../addon/googleFont');

const nano = create();
addonRule(nano);
addonGoogleFont(nano);

nano.googleFont('Roboto');
nano.googleFont('Roboto Slab', 700);

const className1 = nano.rule({
    fontFamily: '"Roboto"'
}, 'Roboto');

const className2 = nano.rule({
    fontFamily: '"Roboto Slab"'
}, 'Roboto_Slab');

storiesOf('Addons/googleFont', module)
    .add('Roboto', () =>
        h('div', {className: className1}, 'Hello world')
    )
    .add('Roboto Slab, bold', () =>
        h('div', {className: className2}, 'Hello world')
    )
