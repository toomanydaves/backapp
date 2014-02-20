(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');
    var spy = config.spy;
    var expect = config.expect;
    var browser = config.browser;
    var requirejs = config.requirejs;
    var classes;
    var state;
    var manager;

    describe('state', function () {
        before(function (done) {
            // Mimic a browser environment.
            browser.apply(this,  [ { }, function () {
                // Load the required modules.
                requirejs([ 'backbone', 'app/framework/State' ], function (Backbone, State) {
                    // Pass classes to spec.
                    classes = { State: State };
                    classes['Backbone.History'] = Backbone.History;
                    // Mock a manager.
                    manager = _.extend(
                        { 
                            getUrl: function () { return ''; },
                            actualize: function () { }
                        },
                        Backbone.Events
                    );

                    // Instantiate a state object.
                    state = new State({ mixin: { showPage: function () { } }, managers: [ manager ] });

                    done();
                });
            } ]);
        });

        it('should inherit from Backbone.History', function () {
            expect(state).to.be.an.instanceof(classes['Backbone.History']);
        });

        describe('_actualizeLocation', function () {
            before(function () {
                spy(state, '_actualizeLocation');
            });

            it('should actualize its location whenever a manager changes its state', function () {
                expect(state._actualizeLocation).to.not.have.been.called;

                manager.trigger('change:state');

                expect(state._actualizeLocation).to.have.been.calledOnce;
            });

            after(function () {
                state._actualizeLocation.restore();
            });
        });

        describe('start', function () {
            before(function () {
                //spy(state, '_actualize');
                spy(manager, 'actualize');

                state.start({ pushState: true, silent: true });
            });

            it('should selectively repress actualizing its managers\' state when starting', function () {
                expect(manager.actualize).to.not.have.been.called;
            });

            describe('_actualize', function () {
                before(function (done) {
                    window.history.pushState({ }, '', '/one');
                    window.history.pushState({ }, '', '/two');
                    window.history.back(done);
                });

                it('should actualize its managers\' state when the location changes', function () {
                    expect(manager.actualize).to.have.been.calledOnce;
                });
            });

            after(function () {
                manager.actualize.restore();
            });
        });
    });
})(require, describe, it);
