
if (typeof Object.create === 'undefined') {
    Object.create = function(proto, descriptors) {
        function F() {}
        F.prototype = proto;
        var instance = new F();

        Object.keys(descriptors).forEach((propName) => {
            Object.defineProperty(instance, propName, descriptors[propName]);
        });
        return instance;
    }
}
