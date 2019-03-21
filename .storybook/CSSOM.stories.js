import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {create} = require('../index');
const {addon: addonCSSOM} = require('../addon/cssom');

const nano = create();
addonCSSOM(nano);

const rule = nano.createRule('.test_cssom_rule');
rule.style.color = 'red';
rule.style.borderColor = 'red';
rule.selectorText = '.test_cssom_rule2';
console.log('rule', rule);
for (let i = 0; i < rule.style.length; i++) {
    console.log(rule.style[i]);
}

const atrule = nano.createRule('.test_cssom_atrule', '@media only screen and (max-width: 600px)');
atrule.style.color = 'blue';
console.log('atrule', atrule);

storiesOf('Addons/CSSOM', module)
    .add('rule', () =>
        h('div', {className: 'test_cssom_rule2'}, 'Hello world')
    )
    .add('with @media at rule', () =>
        h('div', {className: 'test_cssom_atrule'}, 'Hello world')
    )
