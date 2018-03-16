import {createElement as h} from 'react';
const {create} = require('../../index');
const {addon: addonRule} = require('../../addon/rule');
const {addon: addonJsx} = require('../../addon/jsx');
const {addon: addonStyle} = require('../../addon/style');
const {addon: addonStyled} = require('../../addon/styled');
const {addon: addonNesting} = require('../../addon/nesting');
const {addon: addonAtoms} = require('../../addon/atoms');

const renderer = create({h, pfx: 'lol-'});
addonNesting(renderer);
addonAtoms(renderer);
addonRule(renderer);
addonJsx(renderer);
addonStyle(renderer);
addonStyled(renderer);
const {styled} = renderer;

export interface IButtonProps extends React.ButtonHTMLAttributes<any> {
    disabled?: boolean,
    primary?: boolean,
    lite?: boolean,
    small?: boolean,
    simple?: boolean;
    outline?: boolean,
}

const staticTemplate = {
    fz: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.14px',
    lh: '24px',
    trs: 'background 0.2s',
    mar: '10px 0 0',
    bdrad: '3px',
    bd: '0',
    '&:active': {
        op: 1,
        bg: '#777',
        col: '#fff',
        boxShadow: 'none',
    },
};

const dynamicTemplate = (props) => {
    const {disabled, outline, lite, primary, simple, small} = props;
    const style: any = {
        cur: disabled ? 'normal' : 'pointer',
        bg: primary ? 'red' : (lite ? 'transparent' : 'rgba(127,127,127,0.2)'),
        pad: (small ? 6 : 11) + 'px 15px',
        col: primary ? '#fff' : '#777',
        boxShadow: outline ? 'inset 0 0 1px rgba(0,0,0,0.35)' : 'none',
    };

    return style;
};

const Button: any = styled('button')(staticTemplate, dynamicTemplate);

export default Button;