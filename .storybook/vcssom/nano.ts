import {create} from '../../index';
import {addon as addonCSSOM, CSSOMAddon} from '../../addon/cssom';
import {addon as addonVCSSOM, VCSSOMAddon} from '../../addon/vcssom';
import {NanoRenderer} from '../../types/nano';

type Nano = NanoRenderer & CSSOMAddon & VCSSOMAddon;

const nano = create() as Nano;
addonCSSOM(nano);
addonVCSSOM(nano);

export {nano};
