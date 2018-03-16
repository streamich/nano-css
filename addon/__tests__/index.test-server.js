/* eslint-disable */
'use strict';

var expect = require('chai').expect;
var create = require('../../index').create;

describe('nano-css', function () {
    it('exists', function () {
        expect(typeof create).to.equal('function');
    });

    it('can create renderer', function () {
        var renderer = create();

        expect(typeof renderer).to.equal('object');
    });

    it('has default .put and .putRaw addons', function () {
        var renderer = create();

        expect(typeof renderer.put).to.equal('function');
        expect(typeof renderer.putRaw).to.equal('function');
    });

    describe('.put()', function () {
        it('injects simple style', function () {
            var renderer = create();

            renderer.put('.foo', {
                color: 'red'
            });

            expect(renderer.raw).to.equal('.foo{color:red;}');
        });

        it('supports nesting', function () {
            var renderer = create();

            renderer.put('.foo', {
                '.bar': {
                    '.baz': {
                        '.bazooka': {
                            color: 'red'
                        }
                    }
                }
            });

            expect(renderer.raw).to.equal('.foo .bar .baz .bazooka{color:red;}');
        });

        it('supports @media queries', function () {
            var renderer = create();

            renderer.put('.parent', {
                '@media screen': {
                    '.foo': {
                        color: 'red'
                    }
                }
            });

            expect(renderer.raw).to.equal('@media screen{.parent .foo{color:red;}}');
        });

        it('supports nesting in @media queries', function () {
            var renderer = create();

            renderer.put('.parent', {
                '@media screen': {
                    '.foo': {
                        '.bar': {
                            color: 'red'
                        }
                    }
                }
            });

            expect(renderer.raw).to.equal('@media screen{.parent .foo .bar{color:red;}}');
        });

        it('supports @media queries - 2', function () {
            var renderer = create();

            renderer.put('', {
                '@media screen': {
                    '.foo': {
                        color: 'red'
                    },
                    '.bar': {
                        color: 'blue'
                    }
                }
            });
console.log(renderer.raw);
            // expect(renderer.raw).to.equal('@media screen{ .foo{color:red;}}');
        });
    });
});
