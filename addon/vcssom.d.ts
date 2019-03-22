import {CSSOMAddon} from './cssom';
import {Css} from './vcssom/cssToTree';
import {NanoRenderer} from '../types/nano';

export interface VSheet {
    diff(css: Css);
}

export interface VCSSOMAddon {
    VSheet: new () => VSheet;
}

export function addon(nano: NanoRenderer);
