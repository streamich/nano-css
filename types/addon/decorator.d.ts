import {NanoRenderer} from '../nano';

export interface DecoratorPatch {
    css;
}

export type KeyframesAddon = <T extends NanoRenderer>(nano: T) => T & DecoratorPatch;
