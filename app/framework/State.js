/**
 * @module State
 * @requires
 * - [lodash](http://lodash.com)
 * - [backbone](http://backbonejs.org)
 * - {{#crossLinkModule "app.utils.helpers.mixin"}}{{/crossLinkModule}}
 * @return {{#crossLink "State"}}{{/crossLink}}
 */
define([
    'lodash',
    'backbone',
    'helpers/mixin'
], function (
    _,
    Backbone,
    mixin
) {
    'use strict';

    /**
     * @class State
     * @extends [backbone.History](http://backbonejs.org/#History)
     */
    return Backbone.History.extend({
        /**
         * @constructor
         * @param {Object} config
         *     @param {Array} [config.handlers] {{#crossLink "State:handlers"}}{{/crossLink}}
         *     @param {Array} [config.managers] {{#crossLink "State:_managers"}}{{/crossLink}}
         *     @param {Object} [config.initialize] An options for {{#crossLink "State:_initialize"}}{{/crossLink}}
         *     @param {Object} config.mixin
         *         @param {Function} config.mixin.openPage
         * @extends [backbone.History](http://backbonejs.org/docs/backbone.html#section-154)
         */
        constructor: function (config) {
            Backbone.History.call(this);

            /**
             * A list of route-callback hashes representing the API
             * @property handlers
             * @private
             * @type {Array}
             */
            this.handlers = (config && config.handlers) || this.handlers;

            /**
             * The objects used to help manage state components
             * @property _managers
             * @private
             * @type {Array}
             */
            this._managers = (config && config.managers) || [ ];

            if ( config && config.mixin ) {

                if ( !_.isArray(config.mixin) ) {
                    config.mixin = [ config.mixin ];
                }

                _.each(config.mixin, function (properties) {
                    mixin(this, properties);
                }, this);
            }

            return this._initialize(config && config.initialize);
        },
        /**
         * Bind to user events on the browser and communicate the starting state to the app.
         * @method start
         * @extends [backbone.History:start](http://backbonejs.org/#History-start)
         * @param {Object} [options]
         *     @param {Boolean} [options.silent] If the app should not load the initial state from the URL
         * @return {Boolean} Indicate whether a route was matched (Not used - supports backwards compatibility)
         */
        start: function (options) {
            var matchedRoute = Backbone.History.prototype.start.call(this, _.extend({ silent: true }, options));

            if ( this._hasPushState ) {

                _.bindAll(this, '_actualize');

                $(window)
                .off('popstate', this.checkUrl)
                .on('popstate hashchange', this._actualize);
            }
           
            if ( !options || !options.silent ) {
                this._actualize();
            }

            return matchedRoute;
        },
        /**
         * Remove browser event handlers and clean up. (Not used - supports backwards compatibility)
         * @method stop
         * @extends [backbone.History:stop](http://backbonejs.org/docs/backbone.html#section-175)
         * @return `this`
         */
        stop: function () {
            Backbone.History.prototype.stop.call(this);

            if ( this._hasPushState ) {
                $(window)
                .off('popstate', this._actualize)
                .off('hashchange', this._actualize);
            }

        },
        /**
         * @method _initialize
         * @private
         * @param {Object} [options]
         * @return `this`
         */
        _initialize: function () {
            var state = this;

            _.each(this._managers, function (manager) {
                manager.on('change:state', function () {
                    state._actualizeLocation();
                })
            });

            return this;
        },
        /**
         * Execute the handlers for the current URL if they have fallen out of sync
         * @method _actualize
         * @private
         * @return `this`
         */
        _actualize: function () {
            _.each(this._managers, function (manager) {
                manager.actualize();
            });

            return this;
        },
        /**
         * Reset the location using to the combined locations of the state's managers
         * @method _actualizeLocation
         * @private
         * @return `this`
         */
        _actualizeLocation: function () {
            var location = '';

            _.each(this.managers, function (manager) {
                location += manager.getLocation();
            }, this);

            Backbone.History.prototype.navigate.call(this, location);

            return this;
        }
    });
});
