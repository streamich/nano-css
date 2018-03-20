/* eslint-disable */
'use strict';

var expect = require('chai').expect;
var create = require('../../index').create;
var addonAmp= require('../../addon/amp').addon;

process.env.NODE_ENV = 'development';

function createNano (config, addonConfig) {
    var nano = create(config);

    addonAmp(nano, addonConfig);

    return nano;
};

describe('amp', function () {
    it('is a function', function () {
        expect(typeof addonAmp).to.equal('function');
    });

    it('allows inserting rules', function () {
        var nano = createNano();

        nano.put('.foo', {
            color: 'red'
        });

        nano.put('.bar', {
            color: 'red'
        });

        expect(nano.raw.replace(/ /g, '')).to.equal('.foo{color:red;}.bar{color:red;}');
    });

    it('caps at limit', function () {
        var nano = createNano({}, {
            limit: 40
        });

        nano.put('.foo', {
            color: 'red'
        });

        nano.put('.bar', {
            color: 'red'
        });

        nano.put('.baz', {
            color: 'red'
        });

        expect(nano.raw.replace(/ /g, '')).to.equal('.foo{color:red;}.bar{color:red;}');
    });

    it('warns on !important', function () {
        var nano = createNano();
        var console$error = console.error;
        var calls = [];

        console.error = function () {
            calls.push(arguments);
        };

        nano.put('.foo', {
            color: 'red'
        });

        expect(calls.length).to.equal(0);

        nano.put('.bar', {
            color: 'blue !important'
        });

        expect(nano.raw.indexOf('!important') > -1).to.true;
        expect(calls.length).to.equal(1);
        expect(calls[0][0].indexOf('!important') > -1).to.be.true;

        console.error = console$error
    });

    it('removes !important', function () {
        var nano = createNano(null, {
            removeImportant: true
        });

        nano.put('.bar', {
            color: 'blue !important'
        });

        expect(nano.raw.indexOf('!important') > -1).to.false;
    });

    it('warns on reserved selectors', function () {
        var nano = createNano();
        var console$error = console.error;
        var calls = [];

        console.error = function () {
            calls.push(arguments);
        };

        nano.put('.foo', {
            color: 'red'
        });

        expect(calls.length).to.equal(0);

        nano.put('.-amp-bar', {
            color: 'blue'
        });

        expect(calls.length).to.equal(1);

        nano.put('i-amp-baz', {
            color: 'yellow'
        });

        expect(calls.length).to.equal(2);

        nano.put('amp-baz', {
            color: 'green'
        });

        expect(calls.length).to.equal(2);

        console.error = console$error
    });

    it('removes reserved selectors', function () {
        var nano = createNano(null, {
            removeReserved: true
        });

        nano.put('.foo', {
            color: 'blue'
        });

        var length = nano.raw.length;

        nano.put('.-amp-bar', {
            color: 'red'
        });

        expect(nano.raw.length).to.equal(length);

        nano.put('i-amp-baz', {
            color: 'green'
        });

        expect(nano.raw.length).to.equal(length);

        nano.put('amp-bazooka', {
            color: 'orange'
        });

        expect(nano.raw.length > length).to.be.true;
    });

    it('warns on banned declarations', function () {
        var nano = createNano();
        var console$error = console.error;
        var calls = [];

        console.error = function () {
            calls.push(arguments);
        };

        nano.put('.foo', {
            color: 'red'
        });

        expect(calls.length).to.equal(0);

        nano.put('.bar', {
            behavior: 'something'
        });

        expect(calls.length).to.equal(1);

        console.error = console$error
    });

    it('removes banned declarations', function () {
        var nano = createNano(null, {
            removeBanned: true
        });

        nano.put('.foo', {
            color: 'blue'
        });

        var length = nano.raw.length;

        nano.put('.bar', {
            behavior: 'something'
        });

        expect(nano.raw.length).to.equal(length);
    });
});
