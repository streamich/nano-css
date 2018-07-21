import {CssLikeObject} from '../common';
import {NanoRenderer} from '../nano';

export interface SheetPatch {
    /**
     * Creates a collection of CSS rules.
     *
     * ```js
     * const classes = sheet({
     *     wrapper: {
     *         border: '1px solid red',
     *     },
     *     button: {
     *         color: 'red',
     *     },
     * });
     * ```
     */
    sheet: (cssMap: {[s: string]: CssLikeObject}, block?: string) => {[s: string]: string};
}

export type SheetAddon = <T extends NanoRenderer>(nano: T) => T & SheetPatch;
