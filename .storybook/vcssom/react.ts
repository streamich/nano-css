import * as React from 'react';
import createUseCss from './createUseCss';

export const useCss = createUseCss(React.useMemo, React.useLayoutEffect);
