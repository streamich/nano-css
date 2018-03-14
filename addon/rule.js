'use strict';

exports.addon = function (renderer) {
    renderer.rule = function (styles, block) {
        if (!block) {
            block = renderer.hash(styles);
        }

        if (renderer.client) {
            if (process.env.NODE_ENV !== 'production') {
                if (renderer.client) {
                    /*
                    if (document.getElementById('css-' + block)) {
                        console.error(
                            'ezcss detected class name collision "css-' + block + '". ' +
                                'Multiple components use the same class name.'
                        );
                    }
                    */
                }
            }

            if (renderer.cns[block]) {
                if (process.env.NODE_ENV !== 'production') {
                    // eslint-disable-next-line
                    console.info('Hydration cache hit: "' + block + '"');
                }

                return;
            }
        }

        block = renderer.pfx + block;
        renderer.put(block, styles);
        renderer.cns[block] = 1;

        return ' ' + block;
    };
};
