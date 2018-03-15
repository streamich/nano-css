import {createElement as h, Component} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');

import {create} from '../index';
import {addon as addonRule} from '../addon/rule';
import {addon as addonCache} from '../addon/cache';
import {addon as addonDecorator} from '../addon/decorator';
const renderer = create({h});
addonRule(renderer);
addonCache(renderer);
addonDecorator(renderer);
const {css} = renderer;

@css({
  border: '1px solid red'
})
class CssTest extends Component<any, any> {
  render () {
    return <div>Hello there</div>;
  }
}

@css({
  border: '1px solid red'
})
class Dynamic extends Component<any, any> {
  @css(props => ({
    color: 'green'
  }))
  render () {
    return <div>Hello there</div>;
  }
}

@css
class Static extends Component<any, any> {
  static css = {
    border: '1px dashed blue',
  };

  render () {
    return <div>Hello there</div>;
  }
}

storiesOf('@css decorator', module)
  .add('Default', () =>
    <CssTest />
  )
  .add('Dynamic styles', () =>
    <Dynamic />
  )
  .add('Static decorator', () =>
    <Static />
  )
