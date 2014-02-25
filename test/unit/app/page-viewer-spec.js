(function (require, describe, it) {
    'use strict';

    var config = require('../../../setup/config');
    var amd = config.amd;
    var browser = config.browser;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function (object, method) { return sandbox.spy(object, method); };
    var stub = function (object, method) { return sandbox.stub(object, method); };
    var reset = function () { sandbox.reset(); };
    var modules = { };

    describe('pageViewer', function () {
        before(function (done) {
            browser.call(this, void 0, function () {
                amd([ 'app/PageViewer' ], function (PageViewer) {
                    modules.PageViewer = PageViewer;

                    done();
                });
            });
        });

        describe('showPage()', function () {});
    });
}(require, describe, it));
