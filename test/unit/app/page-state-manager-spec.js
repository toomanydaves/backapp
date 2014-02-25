(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var amd = config.amd;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('pageStateManager', function () {
        var pageState;
        var pageStateManager;

        before(function (done) {
            browser.call(this, void 0, function () {
                amd([ 'backbone', 'app/PageStateManager' ], function (Backbone, PageStateManager) {
                    pageState = _.extend(
                        { get: stub(), set: stub(), getUrl: stub() },
                        Backbone.Events
                    );

                    pageStateManager = new PageStateManager({ showPage: stub(), pageState: pageState });

                    done();
                });
            });
        });

        describe('actualize()', function () {
            before(function () {
                stub(pageStateManager, '_loadState');
            });

            describe('_pageState', function () {
                describe('get()', function () {
                    it('should get the current state', function () {
                        pageStateManager.actualize();

                        expect(pageState.get).to.have.been.called;
                    });
    
                    after(reset);
                });
            });

            describe('_actualizeState()', function () {
                describe('_loadState()', function () {
                    it('should load the current state', function () {
                        pageState.get.returns('foo');

                        pageManager.actualize();

                        expect(pageManager._retrieveState).to.have.been.calledWith('foo')
                    });

                    after(reset);
                });
            });

            describe('_transition()', function {
                var page = { url: 'foo' };

                before(function () {
                    pageStateManager._loadState.returns(page);
                });

                it('should transition to the actualized state', function () {
                    pageManager.actualize();

                    expect(pageManager._transition).to.have.been.calledWith(page);
                });

                after(reset);
            });
        });

        describe('setPage()', function () {
            describe('_pageState', function () {
                describe('set()', function () {
                    var onStateChange = spy();

                    before(function () {
                        pageStateManager.on('change:state', onStateChange);
                    });

                    it('should set the page location', function () {
                        pageStateManager.setPage({ url: 'foo' });

                        expect(pageState.set).to.have.been.calledWith('foo');
                    });

                    it('should trigger a state change event', function () {
                        pageState.trigger('change', 'bar');

                        expect(onStateChange).to.have.been.calledWith('bar', pageStateManager);
                    });

                    afterEach(reset);
                });
            });

            describe('_transition()', function () {
                var page = { url: 'foo' };

                it('should transition to the set page', function () {
                    pageStateManager.setPage(page);

                    expect(pageStateManager._transition).to.have.been.calledWith(page)
                });
            });
        });

        describe('_transition()', function () {
            var page = { url: 'foo' };
            var Deferred;

            before(function (done) {
                amd([ 'jquery' ], function ($) {
                    Deferred = $.Deferred;

                    done();
                });
            });

            describe('showPage()', function () {
                it('should show the given state', function () {
                    pageStateManager._transition(page);

                    expect(pageStateManager.showPage).to.have.been.calledWith(page);
                });

                after(reset);
            });

            describe('_removePage()', function () {
                var deferred;

                before(function () {
                    stub(pageStateManager, '_removePage');

                    deferred = new $.Deferred();

                    pageStateManager.showPage.returns(deferred);
                });

                it('should not remove a previous page before it is finished showing the current one', function () {
                    pageStateManager._transition(page);

                    expect(pageStateManager._removePage).to.not.have.been.called;

                    deferred.resolve();

                    expect(pageStateManager._removePage).to.have.been.called;
                });

                after(reset);
            });

            describe('_addPage()', function () {
                var deferred;

                before(function () {
                    stub(pageStateManager, '_addPage');

                    deferred = new $.Deferred();

                    pageStateManager.showPage.returns(deferred);
                });

                it('should not add the current page before it is finished showing it', function () {
                    pageStateManager._transition(page);

                    expect(pageStateManager._addPage).to.not.have.been.called;

                    deferred.resolve();

                    expect(pageStateManager._addPage).to.have.been.calledWith(page);
                });
            });
        });
    });
})(require, describe, it);
