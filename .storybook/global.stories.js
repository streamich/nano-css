import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon} = require('../addon/global');
const {addon: addonRule} = require('../addon/rule');

const nano = create();
addon(nano);
addonRule(nano);

nano.global({
  '.foo': {
      color: 'red'
  }
});

nano.rule({
    color: 'blue',
    '.bar': {
        color: 'green'
    },
    ':global': {
        '.baz': {
            fontWeight: 'bold'
        }
    }
});

storiesOf('Addons/:global', module)
  .add('global()', () =>
    h('div', {className: 'foo'}, 'Hello world')
  )
  .add(':global', () =>
    h('div', {className: 'bar baz'}, 'Hello world')
  )
