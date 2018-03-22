import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create();
require('../addon/rtl').addon(renderer);
require('../addon/rule').addon(renderer);
const {rule} = renderer;

const className = rule({
  paddingLeft: '100px',
  textAlign: 'left',
});

storiesOf('Addons/rtl', module)
  .add('Default', () =>
    h('div', {className: className}, 'Hello world')
  )
