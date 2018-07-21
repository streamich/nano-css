import {CssLikeObject} from '../common';
import {NanoRenderer} from '../nano';

export interface RulePatch {
    /**
     * @param css [CSS-like object](https://github.com/streamich/nano-css/blob/master/docs/put.md#css-like-object).
     * @param block Optional semantic name of this rule, must be unique.
     *
     * You need to install `rule` addon to add this method.
     *
     * ```js
     * import {create} from 'nano-css';
     * import {addon as addonRule} from 'nano-css/addon/rule';
     *
     * const nano = create();
     * addonRule(nano);
     *
     * const className = nano.rule({
     *   color: 'red',
     * });
     * ```
     */
    rule: (css: CssLikeObject, block?: string) => string;
}

export type RuleAddon = <T extends NanoRenderer>(nano: T) => T & RulePatch;
