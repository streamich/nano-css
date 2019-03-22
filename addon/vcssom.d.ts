import {AddonCSSOM} from './cssom';
import {Css} from './vcssom/cssToTree';

export interface VSheet {
    diff(css: Css);
}

export interface AddonVCSSOM {
    VSheet: new () => VSheet;
}

export function addon<Nano extends AddonCSSOM>(nano: Nano): Nano & AddonVCSSOM;
