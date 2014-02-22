(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };

    describe('pageManager', function () {
        var pageLocation;
        var pageManager;

        before(function (done) {
            browser.call(this, void 0, function () {
                requirejs([ 'backbone', 'app/framework/PageManager' ], function (Backbone, PageManager) {
                    pageLocation = _.extend(
                        { getUrl: stub(), get: stub(), set: stub() },
                        Backbone.Events
                    );

                    pageManager = new PageManager({ showPage: stub(), pageLocation: pageLocation });

                    done();
                });
            });
        });

        describe('actualize()', function () {
            before(function () {
                stub(pageManager, '_retrieveState');
            });

            describe('_pageLocation', function () {
                describe('get()', function () {
                    it('should get the current location', function () {
                        pageManager.actualize();

                        expect(pageLocation.get).to.have.been.called;
                    });
    
                    after(reset);
                });
            });

            describe('_actualizeState()', function () {
                describe('_retrieveState()', function () {
                    it('should retrieve the state for the current location', function () {
                        pageLocation.get.returns('foo');

                        pageManager.actualize();

                        expect(pageManager._retrieveState).to.have.been.calledWith('foo')
                    });

                    after(reset);
                });
            });

            describe('_transition()', function {
                var page = { url: 'foo' };

                before(function () {
                    pageManager._retrieveState.returns(page);
                });

                it('should transition to the actualized state', function () {
                    pageManager.actualize();

                    expect(pageManager._transition).to.have.been.calledWith(page);
                });

                after(reset);
            });
        });

        describe('setPage()', function () {
            describe('_pageLocation', function () {
                describe('set()', function () {
                    var onLocationChange = spy();

                    before(function () {
                        pageManager.on('change:location', onLocationChange);
                    });

                    it('should set the page location', function () {
                        pageManager.setPage({ url: 'foo' });

                        expect(pageLocation.set).to.have.been.calledWith('foo');
                    });

                    it('should trigger a location change event', function () {
                        pageLocation.trigger('change', 'bar');

                        expect(onLocationChange).to.have.been.calledWith('bar', pageManager);
                    });

                    afterEach(reset);
                });
            });

            describe('_transition()', function () {
                var page = { url: 'foo' };

                it('should transition to the set page', function () {
                    pageManager.setPage(page);

                    expect(pageManager._transition).to.have.been.calledWith(page)
                });
            });
        });

        describe('_transition()', function () {
            var page = { url: 'foo' };
            var Deferred;

            before(function (done) {
                requirejs([ 'jquery' ], function ($) {
                    Deferred = $.Deferred;

                    done();
                });
            });

            describe('showPage()', function () {
                it('should show the given state', function () {
                    pageManager._transition(page);

                    expect(pageManager.showPage).to.have.been.calledWith(page);
                });

                after(reset);
            });

            describe('_removePage()', function () {
                var deferred;

                before(function () {
                    stub(pageManager, '_removePage');

                    deferred = new $.Deferred();

                    pageManager.showPage.returns(deferred);
                });

                it('should not remove a previous page before it is finished showing the current one', function () {
                    pageManager._transition(page);

                    expect(pageManager._removePage).to.not.have.been.called;

                    deferred.resolve();

                    expect(pageManager._removePage).to.have.been.called;
                });

                after(reset);
            });

            describe('_addPage()', function () {
                var deferred;

                before(function () {
                    stub(pageManager, '_addPage');

                    deferred = new $.Deferred();

                    pageManager.showPage.returns(deferred);
                });

                it('should not add the current page before it is finished showing it', function () {
                    pageManager._transition(page);

                    expect(pageManager._addPage).to.not.have.been.called;

                    deferred.resolve();

                    expect(pageManager._addPage).to.have.been.calledWith(page);
                });
            });
        });
    });
})(require, describe, it);
