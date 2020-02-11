/**
 * Create new object.
 * 
 * Illustrates how `new` operator works.
 * 
 * @example `createNewObject(MyConstructor, arg1, arg2)` // same as `new MyConstructor(atg1, arg2);`
 */
const createNewObject = (constructor, ...args) => {
    // 1) create new empty object
    const instance = {};
    // 2) link prototype
    instance.__proto__ = constructor.prototype;
    // 3) apply constructor logic
    constructor.call(instance, ...args);
    // 4) return newly created object
    return instance;
};
