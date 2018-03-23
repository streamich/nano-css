/* eslint-disable */
'use strict';

var env = require('./env');
var create = require('../../index').create;
var addonNesting = require('../../addon/nesting').addon;

function createNano (config) {
    var nano = create(config);

    addonNesting(nano);

    return nano;
};

describe('nesting', function () {
    it('installs without crashing', function () {
        var nano = createNano();
    });

    it('prepends selectors if no & operand', function () {
        var nano = createNano();

        nano.putRaw = jest.fn();

        nano.put('.foo', {
            '.one,.two': {
                color: 'tomato'
            }
        });

        expect(nano.putRaw.mock.calls[0][0].includes('.foo .one,.foo .two')).toBe(true);
    });
/*
    it('expands & operand after', () => {
        expect(interpolateSelectors(['.one', '#two'], '.test &')).toBe('.test .one,.test #two');
    });

    it('expands & operand before', () => {
        expect(interpolateSelectors(['.test'], '&:hover')).toBe('.test:hover');
    });

    it('expands & operand before and preserves spaces', () => {
        expect(interpolateSelectors(['.one', '.two'], '& .test')).toBe('.one .test,.two .test');
    });
    */
});
