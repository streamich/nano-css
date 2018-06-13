'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('../__dev__/warnOnMissingDependencies')('reset', renderer, ['put']);
    }

    // Adopted from https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css
    var css = {
        html: {
            lineHeight: 1.15,
            '-webkit-text-size-adjust': '100%',
        },
        body: {
            margin: 0,
        },
        h1: {
            fontSize: '2em',
            margin: '0.67em 0',
        },
        hr: {
            boxSizing: 'content-box',
            height: 0,
            overflow: 'visible',
        },
        pre: {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
        },
        'b,strong': {
            fontWeight: 'bolder',
        },
        'code,kbd,samp': {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
        },
        'small': {
            fontSize: '80%',
        },
        'sub,sup': {
            fontSize: '75%',
            lineHeight: 0,
            position: 'relative',
            verticalAlign: 'baseline',
        },
        sub: {
            bottom: '-0.25em',
        },
        sup: {
            top: '-0.5em',
        },
        'button,input,optgroup,select,textarea': {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: 1.15,
            margin: 0,
        },
        'button,input': {
            overflow: 'visible',
        },
        'button,select': {
            textTransform: 'none',
        },
        'button,[type="button"],[type="reset"],[type="submit"]': {
            '-webkit-appearance': 'button',
        },
        'button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner': {
            borderStyle: 'none',
            padding: 0,
        },
        'button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring': {
            outline: '1px dotted ButtonText',
        },
        fieldset: {
            padding: '0.35em 0.75em 0.625em',
        },
        legend: {
            boxSizing: 'border-box',
            display: 'table',
            maxWidth: '100%',
            padding: 0,
            whiteSpace: 'normal',
        },
        progress: {
            verticalAlign: 'baseline',
        },
        '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button': {
            height: 'auto',
        },
        '[type="search"]': {
            '-webkit-appearance': 'textfield',
            outlineOffset: '-2px',
        },
        '[type="search"]::-webkit-search-decoration': {
            '-webkit-appearance': 'none',
        },
        '::-webkit-file-upload-button': {
            '-webkit-appearance': 'button',
            font: 'inherit',
        },
        summary: {
            display: 'list-item',
        },
    };

    renderer.put('', css);
};
