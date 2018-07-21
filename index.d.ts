import {CreateNano} from './types/nano';
import {RuleAddon} from './types/addon/rule';
import {UnitsAddon} from './types/addon/units';
import {DruleAddon} from './types/addon/drule';

export * from './types/nano';

declare module 'nano-css' {
    export const create: CreateNano;
}

declare module 'nano-css/addon/rule' {
    export const addon: RuleAddon;
}

declare module 'nano-css/addon/rdule' {
    export const addon: DruleAddon;
}

declare module 'nano-css/addon/units' {
    export const addon: UnitsAddon;
}
