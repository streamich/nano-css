import {NanoRenderer} from '../types/nano';

export interface HydrateAddon {
    hydrate(sh: HTMLStyleElement): any;
}

export function addon(nano: NanoRenderer): any;
