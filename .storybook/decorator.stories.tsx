import {createElement as h, Component} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');

import {create} from '../lib';
import {addon} from '../addon/decorator';
const renderer = create({h});
addon(renderer);
const {css} = renderer;

@css({
  border: '1px solid red'
})
class CssTest extends Component<any, any> {
  render () {
    return <div>Hello there</div>;
  }
}

storiesOf('Addons/@css decorator', module)
  .add('Default', () =>
    <CssTest />
  )
