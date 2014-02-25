(function (require, describe, it) {
    'use strict';

    var config = require('../../setup/config');
    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('model', function () {
        var model;
        var classes;

        before(function (done) {
            requirejs([ 'app/Model' ], function (Model) {
                classes.Model = Model;
            });
        });

        describe('_nestedAttributes', function () {
            describe('parse', function () {
            });
        });

        describe('_computedAttributes', function () {
        });

        describe('_backlinkAttributes', function () {
        });

        describe('get()', function () {
        });

        describe('set()', function () {
        });

        describe('toJSON()', function () {
        });

        describe('clone()', function () {
        });

        describe('deepClone()', function () {
        });

        describe('sync()', function () {
        }); 
    });
}(require, describe, it));
