(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var browser = config.browser;
    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var reset = function () { sandbox.reset(); };
    var classes = { };
    var state;

    describe('state', function () {
        before(function (done) {
            browser.call(this, { }, function () {
                requirejs([ 'backbone', 'app/State' ], function (Backbone, State) {
                    classes.State = State;
                    classes['Backbone.History'] = Backbone.History;

                    // Instantiate a state object.
                    state = new State({ managers: [ 
                        _.extend(
                            { getUrl: spy(function () { return 'foo'; }), actualize: spy() },
                            Backbone.Events
                        ),
                        _.extend(
                            { getUrl: spy(function () { return 'bar'; }), actualize: spy() },
                            Backbone.Events
                        )
                    ] });

                    spy(state, '_resetUrl');

                    done();
                });
            } ]);
        });

        it('should inherit from Backbone.History', function () {
            expect(state).to.be.an.instanceof(classes['Backbone.History']);
        });

        it('should reset the URL when a manager announces its state has changed', function () {
            state._managers[0].trigger('change:state', 'buz', state._managers[0]);

            expect(window.location.pathname).to.equal('buz#bar');
        });

        describe('start', function () {
            it('should actualize its state by default when starting', function () {
                state.start({ pushState: true });
                expect(state._actualize).to.have.been.called;
            });

            it('should not actualize its state when starting silently', function () {
                state.start({ pushState: true, silent: true });
                expect(state._actualize).to.not.have.been.called;
            });

            afterEach(function () {
                state.stop();
                reset();
            });
        });

        describe('_actualize', function () {
            it('should actualize its managers\' states', function () {
                state._actualize();
                
                _.each(state._managers, function (manager) {
                    expect(manager.actualize).to.have.been.called;
                });
            });

            describe('history.back()', function () {
                before(function (done) {
                    window.history.pushState({ }, '', '/foo');
                    window.history.pushState({ }, '', '/bar');
                    window.history.back(done);
                });

                it('should actualize its state', function () {
                    expect(state._actualize).to.have.been.called;
                });

                after(reset);
            });

            after(reset);
        });
    });
})(require, describe, it);
