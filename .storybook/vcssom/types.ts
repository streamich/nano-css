export type EffectCallback = () => void | (() => void | undefined);
export type DependencyList = ReadonlyArray<any>;
export type HookUseEffect = (effect: EffectCallback, deps?: DependencyList) => void;
export type HookUseMemo = <T>(factory: () => T, deps: DependencyList | undefined) => T;
