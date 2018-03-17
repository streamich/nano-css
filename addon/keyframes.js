'use strict';

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('keyframes', renderer, ['putRaw', 'put']);
    }

    var putAtrule = renderer.putAtrule;

    renderer.putAtrule = function (__, keyframes, prelude) {
        // @keyframes
        if (prelude[1] === 'k') {
            var str = '';

            for (var keyframe in keyframes) {
                var decls = keyframes[keyframe];
                var strDecls = '';

                for (var prop in decls)
                    strDecls += renderer.decl(prop, decls[prop]);

                str += keyframe + '{' + strDecls + '}';
            }

            str = prelude + '{' + str + '}';

            if (renderer.client) {
                renderer.sheet.appendChild(document.createTextNode(str));
            } else {
                renderer.raw += str;
            }

            return;
        }

        putAtrule(__, keyframes, prelude);
    };

    renderer.keyframes = function (keyframes, block) {
        if (!block) block = renderer.hash(keyframes);
        block = renderer.pfx + block;

        renderer.putAtrule('', keyframes, '@keyframes ' + block);

        return block;
    };
};
