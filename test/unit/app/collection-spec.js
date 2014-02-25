(function (require, describe, it) {
    'use strict';

    var config = require('../../setup/config');
    var amd = config.amd;
    var expect = config.expect;
    var sandbox = config.sandbox.create();
    var spy = function () { return sandbox.spy(); };
    var stub = function () { return sandbox.stub(); };
    var reset = function () { sandbox.reset(); };
    var classes = { };

    describe('collection', function () {
        before(function (done) {
            amd([ 'app/Collection' ], function (Collection) {
                classes.Collection = Collection;

                done();
            });
        });

        describe('deepClone()', function () {
        });
    });
}(require, describe, it));
