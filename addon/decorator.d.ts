import {NanoRenderer} from '../types/nano';

export interface DecoratorAddon {
    css: any;
}

export function addon(nano: NanoRenderer): any;
