import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');

const renderer = create({h});
require('../addon/rule').addon(renderer);
require('../addon/sheet').addon(renderer);
require('../addon/useStyles').addon(renderer);
const {useStyles} = renderer;

const styles = {
    tomato: {
        border: '1px solid tomato',
    },
    yellow: {
        border: '1px solid yellow',
    },
};

const Example1 = useStyles(styles, function Example1 (props, styles) {
    return h('div', null,
        h('div', {className: styles.tomato}, 'Red'),
        h('div', {className: styles.yellow}, 'Yellow'),
    )
});

const styles2 = {
    main: {
        border: '1px solid red',
    }
};

function HelloWorld (props, styles) {
    return h('div', {className: styles.main}, 'Hello world!');
}

const Bordered = useStyles(styles2, HelloWorld);

storiesOf('Addons/useStyles()', module)
    .add('Default', () =>
        h(Example1)
    )
    .add('Hello world', () =>
        h(Bordered)
    )
