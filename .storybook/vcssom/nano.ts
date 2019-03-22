import {create} from '../../index';
import {addon as addonCSSOM} from '../../addon/cssom';
import {addon as addonVCSSOM} from '../../addon/vcssom';

const nano = create();
addonCSSOM(nano);
addonVCSSOM(nano);

export {nano};
