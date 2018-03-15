import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
const {create} = require('../index');
const {addon: addonRule} = require('../addon/rule');
const {addon: addonJsx} = require('../addon/jsx');
const {addon: addonStyle} = require('../addon/style');
const {addon: addonStyled} = require('../addon/styled');

const renderer = create({h});
addonRule(renderer);
addonJsx(renderer);
addonStyle(renderer);
addonStyled(renderer);
const {styled} = renderer;

const RedBorder = styled.div({
  border: '1px solid red'
}, (props) => {
    if (props.primary) {
        return {
            color: 'blue'
        };
    }
});

const RedBorderItalic = styled(RedBorder)({
    fontStyle: 'italic'
});

const Button = styled('button')({
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 16/14,
    display: 'inline-block',
    margin: 0,
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '3px',
    border: 0,
    appearance: 'none',
    color: 'white',
    backgroundColor: 'blue',
    '&:hover': {
        boxShadow: `inset 0 0 0 999px #888`
    },
    '&:active': {
        boxShadow: `inset 0 0 8px #999`
    },
    '&:disabled': {
        opacity: 1/4
    }
})

storiesOf('Addons/styled()', module)
    .add('Default', () =>
        h(RedBorder, null, 'Hello world')
    )
    .add('Custom CSS', () =>
        h(RedBorder, {primary: true}, 'Hello world')
    )
    .add('Inline styles', () =>
        h(RedBorder, {style: {color: 'red'}, primary: true}, 'Hello world')
    )
    .add('Composability', () =>
        h(RedBorderItalic, null, 'Hello world')
    )
    .add('Button', () =>
        h(Button, null, 'Click me!')
    )
