import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create({h});
require('../addon/rule').addon(renderer);
require('../addon/sheet').addon(renderer);
require('../addon/withStyles').addon(renderer);
const {withStyles} = renderer;

const styles = {
    tomato: {
        border: '1px solid tomato',
    },
    yellow: {
        border: '1px solid yellow',
    },
};

const Example1 = withStyles(styles, function Example1(props) {
    var styles = props.styles;
    return h('div', null, h('div', {className: styles.tomato}, 'Red'), h('div', {className: styles.yellow}, 'Yellow'));
});

const styles2 = {
    main: {
        border: '1px solid red',
    },
};

function HelloWorld({styles}) {
    return h('div', {className: styles.main}, 'Hello world!');
}

const Bordered = withStyles(styles2, HelloWorld);

storiesOf('Addons/withStyles()', module)
    .add('Default', () => h(Example1))
    .add('Hello world', () => h(Bordered));
