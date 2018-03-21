/* eslint-disable */
'use strict';

var env = require('./env');
var create = require('../../index').create;
var addonVirtual = require('../../addon/virtual').addon;
var addonVirtualHydrate = require('../../addon/virtual-hydrate').addon;

describe('virtual-hydrate', function () {
    it('is a function', function () {
        expect(typeof addonVirtualHydrate).toBe('function');
    });

    it('works', function () {
        var nano1 = create();

        addonVirtual(nano1);

        nano1.rule({
            color: 'red'
        });

        var nano2 = create({
            sh: nano1.sh
        });

        addonVirtual(nano2);
        addonVirtualHydrate(nano2);
    });
});
