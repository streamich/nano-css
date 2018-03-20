/** @jest-environment node */
/* eslint-disable */
'use strict';

var create = require('../../index').create;
var addonVirtual = require('../../addon/virtual').addon;

function createNano (config) {
    var nano = create(config);

    addonVirtual(nano);

    return nano;
};

describe('virtual - node', function () {
    it('installs interface', function () {
        var nano = createNano();

        expect(typeof nano.atomic).toBe('function');
        expect(typeof nano.virtual).toBe('function');
    });

    describe('atomic()', function () {
        it('injects raw styles', function () {
            var nano = createNano();

            var className = nano.atomic('&', 'color:red;', '');

            expect(className).toBe('_a');
            expect(nano.raw).toBe('._a{color:red;}')
        });

        it('increments ID', function () {
            var nano = createNano();

            expect(nano.atomic('&', 'color:red;')).toBe('_a')
            expect(nano.atomic('&', 'color:blue;')).toBe('_b')
            expect(nano.atomic('&', 'color:green;')).toBe('_c')
            expect(nano.raw).toBe('._a{color:red;}._b{color:blue;}._c{color:green;}');
        });

        it('caches', function () {
            var nano = createNano();

            expect(nano.atomic('&', 'color:red;')).toBe('_a')
            expect(nano.atomic('&', 'color:red;')).toBe('_a')
        });

        it('at-rules', function () {
            var nano = createNano();

            expect(nano.atomic('&', 'color:red;', '@media screen')).toBe('_a')
            expect(nano.atomic('&', 'color:red;', '@media screen')).toBe('_a')
            expect(nano.raw).toBe('@media screen{._a{color:red;}}');
        });

        it('interpolates selector', function () {
            var nano = createNano();

            expect(nano.atomic('.global &:hover', 'color:red;', '@media screen')).toBe('_a')
            expect(nano.atomic('.global &:hover', 'color:red;', '@media screen')).toBe('_a')
            expect(nano.raw).toBe('@media screen{.global ._a:hover{color:red;}}');
        });
    });
});
