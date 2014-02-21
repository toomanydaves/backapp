(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var stub = function () { return sandbox.stub(); };

    describe('pageManager', function () {
        var pageParser = { getUrl: stub(), getLocation: stub(), setLocation: stub() };
        var pageManager;

        before(function (done) {
            requirejs([ 'app/framework/PageManager' ], function (PageManager) {
                pageManager = new PageManager({ showPage: stub(), pageParser: pageParser });

                done();
            });
        });

        describe('actualize()', function () {
            describe('_pageParser', function () {
                describe('getLocation()', function () { });
                    it('should get the current location from the parser', function () {
                        pageManager.actualize();

                        expect(pageParser.getLocation).to.have.been.called;
                    });
    
                    after(function () {
                        sandbox.reset();
                    });
                });
            });

            describe('_actualizeState()', function () {
                before(function () {
                    stub(pageManager, '_loadState');
                });

                describe('_retrieveState()', function () {
                    it('should retrieve the state for the current location', function () {
                        pageParser.getLocation.returns('foo');

                        pageManager.actualize();

                        expect(pageManager._retrieveState).to.have.been.calledWith('foo')
                    });

                    after(function () {
                        sandbox.reset();
                    });
                });

                describe('showPage()', function () {
                    var currentState = { };

                    before(function () {
                        stub(pageManager, '_retrieveState');

                        pageManager._retrieveState.returns(currentState);
                    });
                
                    it('should show the current state', function () {
                        pageManager.actualize();

                        expect(pageManager.showPage).to.have.been.calledWith(currentState);
                    });

                });

                describe('_removePage()', function () {
                    var deferred;

                    before(function (done) {
                        stub(pageManager, '_removePage');

                        requirejs([ 'jquery' ], function ($) {
                            deferred = new $.Deferred();

                            pageManager.showPage.returns(deferred);

                            done();
                        });
                    });

                    
                    it('should not remove the previous state before finished showing the current one', function () {
                        pageManager.actualize();

                        expect(pageManager._removePage).to.not.have.been.called;

                        deferred.resolve();

                        expect(pageManager._removePage).to.have.been.called;
                    });
                });

                afterEach(function () {
                });
            });
        });

        describe('setPage()', function () {
            describe('_pageUrlParser', function () {
                describe('setUrlFromPage()', function () {
                });
            });
        });

        describe('getUrl()', function () { });

        describe('_addPage()', function () { });

        describe('_removePage()', function () { });
    });
})(require, describe, it);
