define(
    [
        'lodash'
    ],
    function (
        _
    ) {
        return function mixin (baseObj, mixinObj) {
            var
            mixinProp,
            baseProp;

            for ( prop in mixinObj ) {
                baseProp  = baseObj[prop],
                mixinProp = mixinObj[prop];                 

                if ( typeof baseProp === 'function' && typeof mixinProp === 'function' ) {
                    baseObj[prop] = _.wrap(baseProp, function (fn) {
                        var
                        args = Array.prototype.slice.call(arguments, 1);

                        // First call the mixin function.
                        mixinProp.apply(this, args);

                        // Then call the original function.
                        return fn.apply(this, args);
                    });
                } else {
                    // Only set previously undefined properties. 
                    if ( typeof baseProp === 'undefined' ) {
                        baseObj[prop] = mixinProp;
                    }
                }
            }

            return baseObj;
        };
    }
);
