'use strict';

var stackTrace = require('stacktrace-js');

var cache = {};

function getStackTrace () {
    return stackTrace.get({sourceCache: cache});
}

exports.addon = function (renderer) {
    var stackIndex = 3;

    function queue (entry) {
        console.log('entry', entry);
    }

    var put = renderer.put;

    renderer.put = function (selector, decls, atrule) {
        getStackTrace().then(function(stackframes) {
            var frame = stackframes[stackIndex];

            if (!frame) {
                return;
            }

            queue({
                selector: selector,
                atrule: atrule,
                fileName: frame.fileName,
                lineNumber: frame.lineNumber,
            });

            // const {fileName, lineNumber} = stackframes[stackIndex];
            // addToQueue({selector, lineNumber, fileName});
            // eslint-disable-next-line no-console
            console.log(stackframes);
        // eslint-disable-next-line no-console
        }, console.log);

        put.apply(put, arguments);
    };
};
