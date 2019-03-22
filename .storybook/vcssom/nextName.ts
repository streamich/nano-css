let counter = 0;
const nextName = (pfx: string = '💄-') => pfx + (counter++).toString(36);

export default nextName;
