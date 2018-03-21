/* eslint-disable */
'use strict';

var create = require('../../index').create;
var addonRule = require('../../addon/rule').addon;
var addonCache = require('../../addon/cache').addon;
var addonSnake = require('../../addon/snake').addon;

function createNano (config) {
    var nano = create(config);

    addonRule(nano);
    addonCache(nano);
    addonSnake(nano);

    return nano;
};

describe('snake', function () {
    it('works', function () {
        var nano = createNano();

        expect(nano.s.bg('red').obj).toEqual({
            background: 'red'
        });
    });
});
