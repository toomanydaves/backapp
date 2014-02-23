(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');

    var browser = config.browser;
    var requirejs = config.requirejs;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var stub = function () { return sandbox.stub(); };

    describe('pageState', function () {
        var pageState;

        before(function (done) {
            browser.call(this, void 0, function () {
                requirejs([ 'app/PageState' ], function (PageState) {
                    pageState = new PageState();

                    done();
                });
            });
        });

        describe('getUrl()', function () {
            it('should return the page component of the current URL', function () {
                window.history.pushState(void 0, void 0, '/foo');

                expect(pageState.getUrl()).to.equal('foo');

                window.history.pushState(void 0, void 0, '/bar#buzz');

                expect(pageState.getUrl()).to.equal('bar');
            });
        });

        describe('get()', function () {
            describe('_urlToPage()', function () {
                it('should return the current page' function () {
                    window.history.pushState(void 0, void 0, '/foo');

                    expect(pageState.get()).to.equal('foo');

                    window.history.pushState(void 0, void 0, '/bar#buzz');

                    expect(pageState.get()).to.equal('bar');
                });
            });
        });

        describe('set()', function () {
            describe('_pageToUrl()', function () {
                it('should trigger a state change with the new URL', function () {
                    var pageStateChange = spy();

                    pageState.on('change', pageStateChange);

                    pageState.set('bazz');

                    expect(pageStateChange).to.have.been.calledWith('bazz', pageState);
                });
            });
        });
    });
})(require, describe, it);
