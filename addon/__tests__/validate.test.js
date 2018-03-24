/* eslint-disable */
'use strict';

var env = require('./env');
var create = require('../../index').create;
var addonValidate = require('../../addon/validate').addon;

function createNano (config) {
    var nano = create(config);

    addonValidate(nano);

    return nano;
};

describe('validate', function () {
    it('installs without crashing', function () {
        var nano = createNano();
    });

    it('shows warning in production', function () {
        var console$warn = console.warn;

        console.warn = jest.fn();

        var nano = createNano();

        expect(console.warn).toHaveBeenCalledTimes(env.isProd ? 1 : 0);

        console.warn = console$warn;
    });

    it('does nothing on valid styles', function () {
        var nano = createNano();

        var console$error = console.error;

        console.error = jest.fn();

        nano.put('.foo', {
            color: 'red'
        });

        expect(console.error).toHaveBeenCalledTimes(0);

        console.error = console$error;
    });

    it('shows error on invalid styles', function () {
        var nano = createNano();

        var console$error = console.error;

        console.error = jest.fn();

        nano.put('.foo', {
            color: 'rrrred'
        });

        expect(console.error.mock.calls.length > 0).toBe(true);

        console.error = console$error;
    });
});
