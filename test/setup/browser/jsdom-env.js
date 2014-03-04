(function (require, module) {
    'use strict';

    /**
     * A function to supply the browser environment for testing using [jsdom](https://github.com/tmpvar/jsdom).
     * @namespace test.setup.browser
     * @module jsdom-env 
     * @depends
     * - [jsdom](http://npmjs.org/package/jsdom)
     * - [lodash](http://npmjs.org/package/lodash)
     * - [url](http://npmjs.org/package/url)
     * - {{#crossLinkModule "test.setup.requirejs"}}{{#crossLinkModule}}
     * @return {Function}
    */

    var jsdom = require('jsdom');
    var _ = require('lodash');
    var URL = require('url');
    var amd = require('../amd/requirejs');


    // Redefine jsdom methods to include a callback param in their signature to support async tests.
    var back = function (callback) {
        this.go(-1, callback);
    };
    var forward = function (callback) {
        this.go(1, callback);
    };
    var go = function (delta, callback) {
        if ( typeof delta === 'undefined' || delta === 0) {
            this._location.reload();
            return;
        }

        var newIndex = this._index + delta;

        if ( newIndex < 0 || newIndex >= this.length ) {
            return;
        }

        this._index = newIndex;
        this._applyState(this._states[this._index], true, callback);
    };
    var _applyState = function (state, signalPopstate, callback) {
        this._location._url = URL.parse(URL.resolve(this._location._url.href, state.url));

        if ( signalPopstate ) {
            this._signalPopstate(state, callback);
        }
    };
    var _signalPopstate = function (state, callback) {
        if ( this._window.document ) {
            var ev = this._window.document.createEvent('HTMLEvents');
            ev.initEvent('popstate', false, false);
            ev.state = state.data;
            process.nextTick(function () {
                this._window.dispatchEvent(ev);
                if ( typeof callback === 'function' ) {
                    callback();
                }
            }.bind(this));
        }
    };

    module.exports = function (options, callback) {
        if ( typeof options === 'function' ) {
            callback = options;
            options = void 0;
        }

        options = _.extend(
            { 
                html: '<div id="test-el"></div>',
                url: 'http://test.io'
            },
            options
        );
        
        // Mimic a browser environment.
        jsdom.env({
            html: '<html><body>' + options.html + '</body></html>',
            url: options.url,
            done: function (errs, window) {
                // Add browser globals.
                global.window = window;
                global.document = window.document;
                global.navigator = window.navigator;

                // Add callback params to navigation methods to support asynchronous tests.
                window.history.back = back;
                window.history.forward = forward;
                window.history.go = go;
                window.history._applyState = _applyState;
                window.history._signalPopstate = _signalPopstate;

                amd([ 'jquery', 'lodash' ], function (jquery, lodash) {
                    // Shim third-party [backbone] dependencies.
                    global.$ = jquery;
                    global._ = lodash;

                    typeof callback === 'function' ? callback(errs, window) : _.noop();
                });
            }
        });
    };
})(require, module);
