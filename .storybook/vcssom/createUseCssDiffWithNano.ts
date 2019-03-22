import {cssToTree} from '../../addon/vcssom';
import {HookUseMemo} from './types';

const createUseCssDiffWithNano = (nano: any) => (useMemo: HookUseMemo) => {
    const {VSheet} = nano;
    const useCssDiff = () => {
        const sheet = useMemo(() => new VSheet(), []);
        const diff = useMemo(
            () => (css, selector) => {
                const tree = {};
                cssToTree(tree, css, selector, '');
                sheet.diff(tree);
            },
            []
        );
        return diff;
    };
    return useCssDiff;
};

export default createUseCssDiffWithNano;
