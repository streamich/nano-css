'use strict';

var configure = require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

process.env.NODE_ENV = 'production';

configure({
    adapter: new Adapter()
});

if (typeof window === 'object') {
    global.requestAnimationFrame = window.requestAnimationFrame = function (callback) { return setTimeout(callback, 17); };
}
