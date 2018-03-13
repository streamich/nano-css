/* eslint-disable */
'use strict';

var toCss = require('../ast').toCss;

describe('toCss', function() {
    it('basic example', function() {
        var css = toCss({
            '.foo': {
                color: 'red'
            }
        });

        expect(css).toBe('.foo{color:red;}');
    });

    it('@-rule', function() {
        var css = toCss({
            '.foo': {
                color: 'red'
            },
            '@media screen': {
                '.foo': {
                    color: 'red'
                }
            }
        });

        expect(css).toBe('.foo{color:red;}@media screen{.foo{color:red;}}');
    });
});
