(function (require, describe, it) {
    'use strict';
    
    var config = require('../../../setup/config');
    var amd = config.amd;
    var browser = config.browser;
    var expect = config.expect;
    var sandbox = config.sandbox;
    var spy = function (obj, method) { return sandbox.spy(obj, method); }
    var stub = function (obj, method) { return sandbox.stub(obj, method); }
    var reset = function () { sandbox.reset(); };
    var modules = { };

    describe('view', function () {
        before(function (done) {
            browser.call(this, { }, function () {
                amd([ 'app/View' ], function (View) {
                    modules.View = View;
                });
            });
        });

        describe('initialize()', function () {
        });

        describe('render()', function () {
        });

        describe('remove()', function () {
        });

        describe('addChildView()', function () {
        });

        describe('initializeDatePicker()', function () {
        });

        describe('formatDate()', function () {
        });

        describe('formatPrice()', function () {
        });

        describe('onSetDatePicker()', function () {
        });
    });
}(require, describe, it));
