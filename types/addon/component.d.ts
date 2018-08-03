import {NanoRenderer} from '../nano';

export interface ComponentPatch {
    Component;
}

export type KeyframesAddon = <T extends NanoRenderer>(nano: T) => T & ComponentPatch;
