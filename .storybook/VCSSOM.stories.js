import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {create} = require('../index');
const {addon: addonCSSOM} = require('../addon/cssom');
const {addon: addonVCSSOM} = require('../addon/vcssom');

const nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);

const sheet = new nano.VSheet();
sheet.diff({
    '': {
        '.test_vcssom': {
            color: 'green',
        }
    }
});
sheet.diff({
    '': {
        '.test_vcssom': {
            border: '1px solid tomato',
        }
    },
    '@media only screen and (max-width: 600px)': {
        '.test_vcssom': {
            'text-decoration': 'underline',
        },
    }
});
sheet.diff({
    '': {
        '.test_vcssom': {
            color: 'orange',
            'text-transform': 'uppercase',
            'font-style': 'italic',
            'text-align': 'center',
            border: '1px solid black',
        },
        '.test_vcssom:hover': {
            color: 'red',
        }
    }
});

console.log('sheet', sheet);

storiesOf('Addons/VCSSOM', module)
    .add('rule', () =>
        h('div', {className: 'test_vcssom'}, 'addonVCSSOM')
    )
