import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../lib');
const {addon} = require('../addon/styled');

const renderer = create(h);
addon(renderer);
const {styled} = renderer;

const RedBorder = styled('div', {
  border: '1px solid red'
}, (props) => {
    if (props.primary) {
        return {
            color: 'blue'
        };
    }
});

storiesOf('styled()', module)
    .add('Default', () =>
        h(RedBorder, null, 'Hello world')
    )
    .add('Custom CSS', () =>
        h(RedBorder, {primary: true}, 'Hello world')
    )
    .add('Inline styles', () =>
        h(RedBorder, {style: {color: 'red'}, primary: true}, 'Hello world')
    )
