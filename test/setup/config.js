(function (module, require) {
    'use strict';

    /**
     * A configuration object to use as an interface to the implementation of testing functionality
     * @namespace test.setup
     * @module config
     * @depends
     * - [sinon](http://npmjs.org/package/sinon)
     * - {{#crossLinkModule "test.setup.expect.chai-expect"}}{{/crossLinkModule}}
     * - {{#crossLinkModule "test.setup.browser.jsdom-env"}}{{/crossLinkModule}}
     * - {{#crossLinkModule "test.setup.requirejs"}}{{/crossLinkModule}}
     * @return {Object}
     *  @param {Function} spy
     *  @param {Function} expect
     *  @param {Function} browser
     *  @param {Function} requirejs
     */
    module.exports = {
        spy: require('sinon').spy,
        expect: require('./expect/chai-expect'),
        browser: require('./browser/jsdom-env'),
        requirejs: require('./requirejs')
    };
})(module, require);
