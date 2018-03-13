'use strict';

module.exports = function(styles, selector) {
    var global = {};

    global[selector] = styles;

    for (var key in styles) {
        if (key[0] === '@') {
            // At-rule.
            if (key[1] === 'k') {
                // @keyframes
                global[key] = styles[key];
            } else {
                var obj = {};
                obj[selector] = styles[key];
                global[key] = obj;
            }

            delete styles[key];
        }
    }

    return global;
};
