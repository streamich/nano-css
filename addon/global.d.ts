import {NanoRenderer} from '../types/nano';
import {CssLikeObject} from '../types/common';

export interface GlobalAddon {
    global(css: CssLikeObject): any;
}

export function addon(nano: NanoRenderer): any;
