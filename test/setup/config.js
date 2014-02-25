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
     *  @param {Function} amd
     *  @param {Function} browser
     *  @param {Function} expect
     *  @param {Function} sandbox
     */
    module.exports = {
        amd: require('./amd/requirejs'),
        sandbox: require('sinon').sandbox,
        browser: require('./browser/jsdom-env'),
        expect: require('./expect/chai-expect')
    };
})(module, require);
