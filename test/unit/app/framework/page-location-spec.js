(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var browser = config.browser;
    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var stub = function () { return sandbox.stub(); };

    describe('pageLocation', function () {
        var pageLocation;

        before(function (done) {
            browser.call(this, void 0, function () {
                requirejs([ 'app/framework/PageLocation' ], function (PageLocation) {
                    pageLocation = new PageLocation();

                    done();
                });
            });
        });

        describe('getUrl()', function () {
            it('should return the page component of the current URL', function () {
                window.history.pushState(void 0, void 0, '/foo');

                expect(pageLocation.getUrl()).to.equal('foo');

                window.history.pushState(void 0, void 0, '/bar#buzz');

                expect(pageLocation.getUrl()).to.equal('bar');
            });
        });

        describe('get()', function () {
            describe('_urlToPage()', function () {
                it('should return the current page' function () {
                    window.history.pushState(void 0, void 0, '/foo');

                    expect(pageLocation.get()).to.equal('foo');

                    window.history.pushState(void 0, void 0, '/bar#buzz');

                    expect(pageLocation.get()).to.equal('bar');
                });
            });
        });

        describe('set()', function () {
            describe('_pageToUrl()', function () {
                it('should trigger a state change with the new URL', function () {
                    var changeState = spy();

                    pageLocation.on('change:state', changeState);

                    pageLocation.set('bazz');

                    expect(changeState).to.have.been.calledWith('bazz', pageLocation);
                });
            });
        });
    });
})(require, describe, it);
