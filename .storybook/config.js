import {configure} from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../.storybook', true, /.stories.(j|t)sx?$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
