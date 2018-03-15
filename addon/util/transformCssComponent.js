'use strict';

var sMark = '💄';

module.exports = function (renderer, instance) {
    var Comp = instance.constructor;

    if (Comp[sMark]) return;
    Comp[sMark] = 1;

    if (Comp.css) transformComponentStatic(renderer, Comp, Comp.css);
    if (instance.css) transformComponentDynamic(renderer, Comp, instance.css.bind(instance));
};
