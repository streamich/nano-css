import {CssLikeObject} from './common';
import {RulePatch} from './addon/rule';
import {DrulePatch} from './addon/drule';
import {UnitsPatch} from './addon/units';
import {SheetPatch} from './addon/sheet';
import {KeyframesPatch} from './addon/keyframes';
import {ComponentPatch} from './addon/component';
import {DecoratorPatch} from './addon/decorator';

/*
interface NanoRenderer extends Partial<IUnits> {
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

export interface NanoRenderer
    extends Partial<RulePatch>,
        Partial<UnitsPatch>,
        Partial<DrulePatch>,
        Partial<SheetPatch>,
        Partial<KeyframesPatch>,
        Partial<ComponentPatch>,
        Partial<DecoratorPatch> {
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

export interface NanoOptions {
    /**
     * Prefix added to all class names and animation names.
     */
    pfx?: string;

    /**
     * Hyperscript function of your virtual DOM library. Needed only if you use
     * addons (like `jsx`, `style`, `styled`, `component`) that create components.
     *
     * ```js
     * const nano = create({
     *     h: React.createElement,
     * });
     * ```
     */
    h?: (...args) => any;

    /**
     * Stylesheet `<sheet>` to be used to inject CSS. If not provided, one will
     * be automatically created. You can also provide an external stylesheet
     * `<link>`, but then you need to set proper attributes on it: `rel="stylesheet" type="text/css"`.
     *
     * ```js
     * const nano = create({
     *     sh: typeof window === 'object' ? document.getElementById('nano-css') : undefined,
     * });
     * ```
     */
    sh?: CSSStyleSheet;

    /**
     * Whether to be chatty in DEV mode.
     */
    verbose?: boolean;

    /**
     * Defaults to `Object.assign`.
     */
    assign?: (...objects: object[]) => object;

    /**
     * Defaults to `JSON.stringify`.
     */
    stringify?: (obj: object) => string;
}

type CreateNano = (options?: NanoOptions) => NanoRenderer;

export const create: CreateNano;
