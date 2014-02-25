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

    describe('collectionView', function () {
        before(function (done) {
            browser.call(this, void 0, function () {
                amd([ 'app/CollectionView', 'app/View' ], function (CollectionView, View) {
                    modules.CollectionView = CollectionView;
                    modules.View = View;

                    done();
                });
            });
        });

        describe('_modelViews', function () {
        });

        describe('ModelViewClass', function () {
        });

        describe('initialize', function () {
        });

        describe('render', function () {
            describe('_renderModelView', function () {
            });
        });

        describe('add', function () {
        });

        describe('addModelView', function () {
        });
    });
}(require, describe, it));
