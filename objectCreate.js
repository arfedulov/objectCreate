'use strict'
/** Polyfill for `Object.create`. */

if (typeof Object.defineProperty !== 'function') {
    Object.defineProperty = function(object, propName, descriptor) {
        var useGetter = 'get' in descriptor;
        var useSetter = 'set' in descriptor;
        var useValue = 'value' in descriptor;
        var invalidUsage = (useSetter || useGetter) && useValue;
    
        if (invalidUsage) {
            throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value attribute');
        }
        if (useValue) {
            object[propName] = descriptor.value;
        }
        if (useGetter) {
            Object.prototype.__defineGetter__.call(object, propName, descriptor.get);
        }
        if (useSetter) {
            Object.prototype.__defineSetter__.call(object, propName, descriptor.set);
        }
    }
}

if (typeof Object.create !== 'function') {
    Object.create = function(proto, descriptors) {
        function F() {}
        F.prototype = proto;
        var instance = new F();

        for (var propName in descriptors) {
            Object.defineProperty(instance, propName, descriptors[propName]);
        }
        return instance;
    }
}
