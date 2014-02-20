(function (require, module) {
    'use strict';

    /**
     * Chai's expect assertion function configure with sinon integration
     * @namespace test.setup
     * @module chai-expect
     * @depends
     * - [chai](http://npmjs.org/package/chai)
     * - [sinon-chai](http://npmjs.org/package/sinon-chai)
     * @return {Function}
     */

    var chai = require('chai');
    var sinonChai = require('sinon-chai');

    chai.use(sinonChai);

    module.exports = chai.expect;
})(require, module);
