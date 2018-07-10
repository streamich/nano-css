import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon} = require('../addon/rule');
const {addon: addonSourcemaps} = require('../addon/sourcemaps');
const {addon: addonSheet} = require('../addon/sheet');
const {addon: addonCache} = require('../addon/cache');
const {addon: addonJsx} = require('../addon/jsx');
const {addon: addonStyle} = require('../addon/style');
const {addon: addonStyled} = require('../addon/styled');

const nano = create({
  h
});
addon(nano);
addonSheet(nano);
addonCache(nano);
addonJsx(nano);
addonStyle(nano);
addonStyled(nano);
addonSourcemaps(nano);
const {rule, sheet, jsx, styled} = nano;

const className1 = rule({
  border: '1px solid red'
}, 'RedBorder');

const styles1 = sheet({
  wrapper: {
    border: '1px solid red',
  },
  button: {
    color: 'green',
    background: 'black',
  }
});

const Button = jsx('button', {
  border: '1px solid black',
  background: 'black',
  color: 'white',
});

const Button2 = styled.button({
  border: '1px solid black',
  background: 'black',
  color: 'red',
});

storiesOf('Addons/sourcemaps', module)
  .add('Default', () =>
    h('div', {className: className1}, 'Hello world')
  )
  .add('sheet', () =>
    h('div', {className: styles1.wrapper},
      h('button', {className: styles1.button}, 'Click me!')
    )
  )
  .add('jsx', () => h(Button, {}, 'Click me!'))
  .add('styled', () => h(Button2, {}, 'Click me!'))
