import {CssLikeObject} from './common';
import {RulePatch} from './addon/rule';

/*
interface NanoRenderer extends Partial<IUnits> {
    client: boolean;
    raw: string;
    pfx: string;
    putRaw: (rawCss: string) => void;
    put: (selector: string, css: ICssLikeObject, atrule?: string) => void;
    rule?: (css: ICssLikeObject, block?: string) => string;
    drule?: (css: ICssLikeObject, block?: string) => TDynamicCss;
    sheet?: (cssMap: {[s: string]: ICssLikeObject}, block?: string) => {[s: string]: string};
    dsheet?: (cssMap: {[s: string]: ICssLikeObject}, block?: string) => {[s: string]: TDynamicCss};
    jsx?: (
        type: THyperscriptType,
        css: ICssLikeObject,
        dynamicCss?: TDynamicCss,
        block?: string
    ) => THyperscriptComponent;
    style?: (
        type: THyperscriptType,
        css: ICssLikeObject,
        dynamicCss?: TDynamicCss,
        block?: string
    ) => THyperscriptComponent;
    styled?: (
        type: THyperscriptType
    ) => (css: ICssLikeObject, dynamicCss?: TDynamicCss, block?: string) => THyperscriptComponent;
    cache?: (css: ICssLikeObject) => string;
    global?: (css: ICssLikeObject) => void;
    keyframes?: (...args) => string;
    hydrate?: (sh: CSSStyleSheet) => void;
    hyperstyle?: (cssMap: {[s: string]: ICssLikeObject}, block?: string) => THyperstyle;
    putRule?: (...args) => any;
    createRef?: (...args) => any;
    ref?: (...args) => any;
    useStyles?: (
        cssMap: {[s: string]: ICssLikeObject},
        fn: (props, styles: {[s: string]: string}) => THyperstyleElement,
        block?: string
    ) => THyperscriptComponent;
    withStyles?: (
        cssMap: {[s: string]: ICssLikeObject},
        fn: THyperscriptComponent,
        block?: string
    ) => THyperscriptComponent;
    s?: object;
    units?: IUnits;
}
*/

export interface NanoRenderer extends Partial<RulePatch> {
    /**
     * Equals to `true` if in browser environment.
     */
    client: boolean;

    /**
     * Raw CSS string. Populated in non-browser environment. Can be used to
     * render CSS server side.
     */
    raw: string;

    /**
     * Prefix to add to all class names and keyframe names.
     */
    pfx: string;

    /**
     * Add raw CSS rule. Example:
     *
     * ```js
     * nano.putRaw(`
     * .foo {
     *   color: red;
     * }
     * `);
     * ```
     */
    putRaw: (rawCss: string) => void;

    /**
     * Inject CSS given a selector and a CSS-like object.
     *
     * ```js
     * nano.put('.foo', {
     *     color: 'red',
     * });
     * ```
     *
     * Supports basic nesting.
     *
     * ```js
     * nano.put('.bar', {
     *     color: 'red',
     *     ':hover': {
     *         color: 'blue',
     *     },
     * });
     * ```
     */
    put: (selector: string, css: CssLikeObject, atrule?: string) => void;
}

interface INanoOptions {
    pfx?: string;
    h?: (...args) => any;
    sh?: CSSStyleSheet;
    verbose?: boolean;
    assign?: (...objects: object[]) => object;
    stringify?: (obj: object) => string;
}

type CreateNano = (options?: INanoOptions) => NanoRenderer;

export const create: CreateNano;
