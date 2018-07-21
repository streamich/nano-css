import {NanoRenderer, NanoOptions} from '../nano';
import {RulePatch} from '../addon/rule';
import {SheetPatch} from '../addon/sheet';

type SheetPreset = (options: NanoOptions) => NanoRenderer & RulePatch & SheetPatch;
