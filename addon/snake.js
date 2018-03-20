'use strict';

var atoms = require('./atoms').atoms;

var createSnake = function (renderer, rules) {
    rules = rules || {};

    var defaultRules = renderer.assign({}, atoms, {
        bgWhite: function () {
            defaultRules.bg.call(this, '#fff');
        },

        bgBlack: function () {
            defaultRules.bg.call(this, '#000');
        },
    });

    rules = renderer.assign({}, defaultRules, rules);

    var snake = {
        start: function () {
            var instance = Object.create(snake);

            instance.obj = {};
            instance.toString = function () {
                return renderer.cache(instance.obj);
            };

            return instance;
        }
    };

    var onRule = function (name) {
        var rule = rules[name];

        if (typeof rule === 'function') {
            if (!rule.length) {
                Object.defineProperty(snake, name, {
                    get: function () {
                        rule.call(this.obj);
                        return this;
                    }
                });
            } else {
                snake[name] = function () {
                    rule.apply(this.obj, arguments);
                    return this;
                };
            }
        } else {
            snake[name] = function (value) {
                this.obj['' + rule] = value;
                return this;
            };
        }
    };

    for (var name in rules) onRule(name);

    return snake;
};

exports.addon = function (renderer) {
    if (process.env.NODE_ENV !== 'production') {
        require('./__dev__/warnOnMissingDependencies')('sheet', renderer, ['cache']);
    }

    var snake = createSnake(renderer);

    Object.defineProperty(renderer, 's', {
        get: function () {
            return snake.start();
        }
    });
};
