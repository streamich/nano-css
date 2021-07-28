import * as React from 'react';
import {useCss} from './react';

export const styled = (useCss) => (h) => (tag) => ({as = tag, css, className, ...rest}) => {
    const extraClass = useCss(css);
    rest.className = className ? className + ' ' + extraClass : extraClass;
    return h(as, rest);
};

export const Box = styled(useCss)(React.createElement)('div') as any;
export const Text = styled(useCss)(React.createElement)('span') as any;
