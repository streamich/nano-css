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

    it('.relative', function () {
        var nano = createNano();

        expect(nano.s.rel.obj).toEqual({
            position: 'relative',
        });
    });

    describe('accents', function () {
        it('semantic', function () {
            var nano = createNano();

            expect(nano.s.bold.italic.underline.obj).toEqual({
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecoration: 'underline',
            });
        });

        it('shorhand', function () {
            var nano = createNano();

            expect(nano.s.b.i.u.obj).toEqual({
                fontStyle: 'italic',
                fontWeight: 'bold',
                textDecoration: 'underline',
            });
        });
    });

    describe('.s', function () {
        it('any value', function () {
            var nano = createNano();

            expect(nano.s.s('box-shadow', '0 0 3px black').obj).toEqual({
                'box-shadow': '0 0 3px black',
            });
        });

        it('nesting', function () {
            var nano = createNano();

            expect(nano.s.s(':hover', nano.s.u.obj).obj).toEqual({
                ':hover': {
                    textDecoration: 'underline'
                }
            });
        });

        it('nesting shorthand', function () {
            var nano = createNano();

            expect(nano.s.s(':hover', nano.s.u).obj).toEqual({
                ':hover': {
                    textDecoration: 'underline'
                }
            });
        });
    });
});
