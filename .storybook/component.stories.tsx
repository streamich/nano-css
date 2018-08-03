import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
import {create} from '../index';
import {addon as addonRule} from '../addon/rule';
import {addon as addonCache} from '../addon/cache';
import {addon as addonComponent} from '../addon/component';
const renderer = create({h});
addonRule(renderer);
addonCache(renderer);
addonComponent(renderer);

const {Component} = renderer;

class CssTest extends Component {
    static css = {
        border: '1px solid red'
    };

    render () {
        return <div>Hello there</div>;
    }
}

class Dynamic extends Component {
    static css = {
        border: '1px solid red'
    };

    css() {
        return {
            color: 'green'
        };
    }

    render () {
        return <div>Hello there</div>;
    }
}

class Static extends Component {
  static css = {
    border: '1px dashed blue',
  };

  render () {
    return <div>Hello there</div>;
  }
}

class Static2 extends Component {
  static css = {
    border: '1px dashed blue',
  };

  css () {
    return {
      color: this.props.color
    };
  }

  render () {
    return <div>Hello there</div>;
  }
}

storiesOf('Addons/Component', module)
    .add('Default', () =>
        h(CssTest as any)
    )
    .add('Dynamic styles', () =>
        h(Dynamic as any)
    )
    .add('Static decorator', () =>
        h(Static as any)
    )
    .add('Static dynamic styles', () =>
        h(Static2 as any, {color: 'blue'})
    )
