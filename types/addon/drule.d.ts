import {CssLikeObject, TDynamicCss} from '../common';
import {NanoRenderer} from '../nano';

export interface DrulePatch {
    drule: (css: CssLikeObject, block?: string) => TDynamicCss;
}

export type DruleAddon = <T extends NanoRenderer>(nano: T) => T & DrulePatch;
