(function (require, module) {
    'use strict';

    /**
     * A configurable Require JS module loader function for the server
     * @namespace test.setup
     * @module requirejs
     * @depends
     * - [lodash](http://npmjs.org/package/lodash)
     * - [requirejs](https://npmjs.org/package/requirejs)
     * @return {Function}
     */
    var _ = require('lodash');
    var requirejs = require('requirejs');

    requirejs.config(_.merge(
        { nodeRequire: require },
        require('../../../require.json')
    ));

    module.exports = requirejs;
})(require, module);
