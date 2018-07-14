import * as CSS from 'csstype';

interface ICssProps extends CSS.Properties, CSS.PropertiesHyphen {}

interface ICssLikeObject extends ICssProps {
    [selector: string]: any | ICssLikeObject;
}

interface IUnits {
    px: (num: number) => string;
    cm: (num: number) => string;
    in: (num: number) => string;
    pt: (num: number) => string;
    pc: (num: number) => string;
    em: (num: number) => string;
    ex: (num: number) => string;
    ch: (num: number) => string;
    rem: (num: number) => string;
    vw: (num: number) => string;
    vh: (num: number) => string;
    deg: (num: number) => string;
    vmin: (num: number) => string;
    vmax: (num: number) => string;
}

type TDynamicCss = (css: ICssLikeObject) => string;
type THyperstyleElement = object;
type THyperstyle = (...args) => THyperstyleElement;
type THyperscriptType = string | Function;
type THyperscriptComponent = Function;

interface NanoRenderer extends Partial<IUnits> {
    client: boolean;
    raw: string;
    pfx: string;
    putRaw: (rawCss: string) => void;
    put: (selector: string, css: ICssLikeObject, atrule?: string) => void;

    /**
     * Need to install `rule` addon.
     */
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

interface INanoOptions {
    pfx?: string;
    h?: (...args) => any;
    sh?: CSSStyleSheet;
    verbose?: boolean;
    assign?: (...objects: object[]) => object;
    stringify?: (obj: object) => string;
}

type TCreateNano = (options?: INanoOptions) => NanoRenderer;

export const create: TCreateNano;
