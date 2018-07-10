import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon} = require('../addon/rule');
const {addon: addonSourcemaps} = require('../addon/sourcemaps');

const nano = create();
addon(nano);
addonSourcemaps(nano);
const {rule} = nano;

const className1 = rule({
  border: '1px solid red'
}, 'RedBorder');

storiesOf('Addons/sourcemaps', module)
  .add('Default', () =>
    h('div', {className: className1}, 'Hello world')
  )
