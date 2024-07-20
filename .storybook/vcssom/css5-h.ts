import {styled} from './css5';

const cache = {};
const cachedBlock = (useCss, h, tag) => cache[tag] || (cache[tag] = styled(useCss)(h)(tag));

export const H =
    (h, useCss) =>
    (tag, props, ...rest) => {
        if (!props || !props.css || typeof tag !== 'string') return h(tag, props, ...rest);
        const Block = cachedBlock(useCss, h, tag);
        return h(Block, props, ...rest);
    };
