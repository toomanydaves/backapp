(function (require, describe, it) {
    'use strict';

    var config = require('../setup/config');
    var amd = config.amd;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('model', function () {
        var model;
        var modules = { };

        before(function (done) {
            amd([ 'backbone', 'framework/Model' ], function (Backbone, Model) {
                modules.Backbone = Backbone;
                modules.Model = Model;

                done();
            });
        });

        it('inherits from Backbone Model', function () {
            expect(new modules.Model()).to.be.an.instanceof(modules.Backbone.Model);
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
