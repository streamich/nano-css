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
    .add('Composability', () =>
        h(RedBorderItalic, null, 'Hello world')
    )
