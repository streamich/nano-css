import * as CSS from 'csstype';

interface CssProps extends CSS.Properties, CSS.PropertiesHyphen {}

interface CssLikeObject extends CssProps {
    [selector: string]: any | CssLikeObject;
}

type TDynamicCss = (css: CssLikeObject) => string;
type THyperstyleElement = object;
type THyperstyle = (...args) => THyperstyleElement;
type THyperscriptType = string | Function;
type THyperscriptComponent = Function;
