import * as React from 'react';
import {useCss} from './react';
import createUseDataCss from './createUseDataCss';
import {Box} from './css5';
import {H} from './css5-h';
import Svg from 'iconista';

const useDataCss = createUseDataCss(useCss);

const h = H(React.createElement, useCss);

declare module 'react' {
    interface DOMAttributes<T> {
        css?: any;
    }
}

export const Demo = () => {
    const className = useCss({
        color: 'red',
        border: '1px solid red',
        fontWeight: 'bold',
        '&:hover': {
          color: 'blue',
        },
    });
    const italic = useDataCss({
        'font-style': 'italic',
        '&:hover': {
            color: 'red',
        },
    });

    console.log('italic', italic)

    const css = {
        color: 'blue',
        textDecoration: 'underline',
    };

    const svgClass = useCss({
        fill: 'green',
        '&:hover': {
            fill: 'red',
        },
        '&:active': {
            fill: 'black',
        },
    });

    return (
        <div css={{border: '1px solid green'}}>
            <Box css={css}>asdf++</Box>
            <div className={className}>hello...</div>
            <div {...italic}>Italic text..</div>
            <div css={{'& svg': {fill: 'red'}}}>
                <Svg width={40} set="ant_fill" icon="clock-circle" />
            </div>
            <Svg width={60} className={svgClass} set="ibm_16" icon="add--outline" />
        </div>
    );
};
