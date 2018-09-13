/* eslint-disable */
'use strict';

var env = require('./env');
var create = require('../../index').create;
var addonPrefixer = require('../../addon/prefixer').addon;

function createNano (config) {
	var nano = create(config);

	addonPrefixer(nano);

	return nano;
};

describe('prefixer', function () {
	it('installs without crashing', function () {
		var nano = createNano();
		expect(nano).toBeDefined();
	});

	it('handles "user-select" correctly', function() {
		var nano = createNano();

		nano.putRaw = jest.fn();

		nano.put('.one', {
			'user-select': 'none'
		});

		var result = nano.putRaw.mock.calls[0][0].replace(/ +(?= )/g,'');
		[
			'-ms-user-select',
			'-moz-user-select',
			'-webkit-user-select',
			'user-select'
		].forEach(function(key) {
			expect(result.includes(key)).toBe(true);
		});

	});
});
