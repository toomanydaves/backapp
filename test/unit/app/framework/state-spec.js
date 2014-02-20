(function (require, describe, it) {
    'use strict';

    var config = require('../setup/config');
    var spy = config.spy;
    var expect = config.expect;
    var browser = config.browser;
    var requirejs = config.requirejs;
    var classes = { };
    var history;

    describe('state', function () {
        before(function (done) {
            // Mimic a browser environment.
            browser.apply(this,  [ { }, function () {
                // Load the required modules.
                requirejs([ 'backbone', 'app/framework/State' ], function (Backbone, State) {
                    
                    // Pass classes to spec.
                    classes['Backbone.History'] = Backbone.History;

                    // Instantiate a state object.
                    state = new State({
                        mixin: {
                            showPage: function () { }
                        },
                        handlers: [ ]
                    });

                    // Start the state.
                    state.start({ pushState: true, silent: true });
                });
            } ]);
        });

        it('should inherit from Backbone.History', function () {
            expect(state).to.be.an.instanceof(classes['Backbone.History']);
        });

        describe('start()', function () {
            describe('_initialize()', function () { });
        });

        describe('_managers', function () {
            describe('_actualize()', function () { });

            describe('_setLocation()', function () { });
        });

        describe('_handlers', function () {
            describe('handler', function () {
                describe('route', function () { });
                
                describe('callback', function () { });
            });
        });
    });
}(require, describe, it);
