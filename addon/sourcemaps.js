'use strict';

var StackTrace = require('stacktrace-js');
var SourcemapCodec = require('sourcemap-codec');

exports.addon = function (renderer) {
    var queue = [];
    var timeout = null;
    var sourceCache = {};

    function flush () {
        timeout = null;

        var sources = [];
        var segments = [];
        var rules = [];

        for (var i = 0; i < queue.length; i++) {
            var item = queue[i];

            rules.push(item.rule);
            segments.push([[0, sources.length, item.lineNumber - 1, 0]]);
            sources.push(item.fileName);
        }

        queue = [];

        var mappings = SourcemapCodec.encode(segments);
        var map = {
            version: 3,
            sources: sources,
            mappings: mappings,
            sourcesContent: sources.map(function (source) {
                return sourceCache[source];
            }),
        };

        var json = JSON.stringify(map);
        var base64 = window.btoa(json);
        var css = rules.join('\n') + '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64 + ' */';
        var style = document.createElement('style');

        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    function enqueue (rawCss) {
        StackTrace.get({sourceCache: sourceCache})
            .then(function (stackframes) {
                var frame = stackframes[4];

                if (!frame) {
                    return;
                }

                var pos = rawCss.indexOf('{');

                if (pos < 1) return;

                var selector = rawCss.substr(0, pos).trim();

                queue.push({
                    selector: selector,
                    rule: rawCss,
                    fileName: frame.fileName,
                    lineNumber: frame.lineNumber,
                });

                if (!timeout) {
                    timeout = setTimeout(flush, 100);
                }
            // eslint-disable-next-line no-console
            }, console.log);
    }

    var putRaw = renderer.putRaw;

    renderer.putRaw = function (rawCSS) {
        enqueue(rawCSS);
        putRaw.apply(null, arguments);
    };
};
