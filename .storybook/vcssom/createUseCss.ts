import {HookUseMemo, HookUseEffect} from './types';
import createUseCssDiff from './createUseCssDiff';
import nextNameDefault from './nextName';

// By default generate class name selectors.
const getSelectorDefault = (name: string) => '.' + name;

const createUseCss = (useMemo: HookUseMemo, useLayoutEffect: HookUseEffect) => {
    const useCssDiff = createUseCssDiff(useMemo);
    const useCss = (css: object, nextName = nextNameDefault, getSelector = getSelectorDefault) => {
        const name = useMemo(nextName, []);
        const diff = useCssDiff();

        useLayoutEffect(() => {
            const selector = getSelector(name);
            diff(css, selector);
            return () => {
                diff({}, '');
            };
        });

        return name;
    };
    return useCss;
};

export default createUseCss;
