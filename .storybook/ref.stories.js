import {createElement as h, Component} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRef} = require('../addon/ref');

const nano = create();

addonRef(nano);

const css = nano.createRef();

class RefExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            show: true,
        };
    }

    render() {
        var data = nano.ref({'&': {color: this.state.color}, '&:hover': {color: 'blue'}});

        return h(
            'div',
            {},
            this.state.show && h('div', data, 'Hello world'),

            h('br'),

            h('button', {onClick: () => this.setState({color: 'red'})}, 'red'),
            h('button', {onClick: () => this.setState({color: 'blue'})}, 'blue'),
            h('button', {onClick: () => this.setState({show: !this.state.show})}, 'show/hide')
        );
    }
}

storiesOf('Addons/ref', module)
    .add('Default', () => h('div', css({'&': {color: 'red'}, '&:hover': {color: 'blue'}}), 'Hello world'))
    .add('ref()', () => h(RefExample));
