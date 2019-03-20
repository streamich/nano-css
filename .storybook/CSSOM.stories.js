import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {create} = require('../index');
const {addon: addonCSSOM} = require('../addon/cssom');

const nano = create();
addonCSSOM(nano);

const rule = nano.createRule('.test_cssom_rule');
rule.style.color = 'red';
console.log('rule', rule);

const atrule = nano.createRule('.test_cssom_atrule', '@media only screen and (max-width: 600px)');
atrule.style.color = 'blue';
console.log('atrule', atrule);

storiesOf('Addons/CSSOM', module)
    .add('rule', () =>
        h('div', {className: 'test_cssom_rule'}, 'Hello world')
    )
    .add('with @media at rule', () =>
        h('div', {className: 'test_cssom_rule test_cssom_atrule'}, 'Hello world')
    )
