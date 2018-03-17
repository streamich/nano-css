/* eslint-disable */
'use strict';

var create = require('../../index').create;

function findCssRuleAndDelete (selector) {
    var sheets = document.styleSheets;

    for (var i = 0; i < sheets.length; i++) {
        var sheet = sheets[i];

        if (!sheet.cssRules) continue;

        for (var j = 0; j < sheet.cssRules.length; j++) {
            var rule = sheet.cssRules[j];

            if (rule.selectorText === selector) {
                sheet.deleteRule(j);

                return rule;
            }
        }
    }

    return null;
}

describe('nano-css', function () {
    it('exists', function () {
        expect(typeof create).toBe('function');
    });

    it('can create renderer', function () {
        var nano = create();

        expect(typeof nano).toBe('object');
        expect(typeof nano.putRaw).toBe('function');
        expect(typeof nano.put).toBe('function');
    });

    it('default prefix is "_"', function () {
        expect(create().pfx).toBe('_');
    });

    it('default assign function is Object.assign', function () {
        expect(create().assign).toBe(Object.assign);
    });

    it('default stringify function is JSON.stringify', function () {
        expect(create().stringify).toBe(JSON.stringify);
    });

    it('has no default hyperscript function', function () {
        expect(create().h).toBe(undefined);
    });

    it('can set configuration', function () {
        var assign = function () {
            return Object.assign.apply(Object, arguments);
        };
        var h = function () {};
        var stringify = function () {};
        var nano = create({
            pfx: 'hello-',
            h: h,
            assign: assign,
            stringify: stringify
        });

        expect(nano.pfx).toBe('hello-');
        expect(nano.h).toBe(h);
        expect(nano.assign).toBe(assign);
        expect(nano.stringify).toBe(stringify);
    });

    describe('.put()', function () {
        it('inserts CSS', function () {
            var nano = create();

            nano.put('.foo', {
                color: 'red'
            });

            var rule = findCssRuleAndDelete('.foo');

            expect(typeof rule).toBe('object');
            expect(rule.style.color).toBe('red');
        });

        it('puts many declarations', function () {
            var nano = create();

            nano.put('.foo2', {
                color: 'red',
                textDecoration: 'underline',
                'border-radius': '5px',
            });

            var rule = findCssRuleAndDelete('.foo2');

            expect(typeof rule).toBe('object');
            expect(rule.style.color).toBe('red');
            expect(rule.style['text-decoration']).toBe('underline');
            expect(rule.style['border-radius']).toBe('5px');
        });

        it('supports class name nesting', function () {
            var nano = create();

            nano.put('.foo3', {
                '.nested' : {
                    color: 'blue',
                }
            });

            var rule = findCssRuleAndDelete('.foo3 .nested');

            expect(typeof rule).toBe('object');
            expect(rule.style.color).toBe('blue');
        });

        it('supports pseudo selectors', function () {
            var nano = create();

            nano.put('.foo3', {
                ':hover' : {
                    color: 'green',
                }
            });

            var rule = findCssRuleAndDelete('.foo3:hover');

            expect(typeof rule).toBe('object');
            expect(rule.style.color).toBe('green');
        });

        it('can insert global styles', function () {
            var nano = create();

            nano.put('', {
                '.global' : {
                    color: 'green',
                }
            });

            var rule = findCssRuleAndDelete('.global');

            expect(typeof rule).toBe('object');
            expect(rule.style.color).toBe('green');
        });
    });
});
