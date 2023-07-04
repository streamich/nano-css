import {NanoRenderer} from '../types/nano';

export interface ComponentAddon {
    Component: any;
}

export function addon(nano: NanoRenderer): any;
