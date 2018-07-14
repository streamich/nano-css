type ICssLikeObject = object;

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
    drule?: (...args) => any;
    sheet?: (...args) => any;
    dsheet?: (...args) => any;
    jsx?: (...args) => any;
    style?: (...args) => any;
    styled?: (...args) => any;
    cache?: (...args) => any;
    global?: (...args) => any;
    keyframes?: (...args) => any;
    hydrate?: (...args) => any;
    hyperstyle?: (...args) => any;
    pipe?: (...args) => any;
    ref?: (...args) => any;
    useStyles?: (...args) => any;
    withStyles?: (...args) => any;
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

type TCreateNano = (options: INanoOptions) => NanoRenderer;

export const create: TCreateNano;
