import { allPass, both, equals, invoker, is, path, pipe, propIs } from 'ramda';

const prototypeIsObject = both(
  is(Object),
  pipe(
    obj => Object.prototype.toString(obj),
    equals('[object Object]'),
  ),
);

const constructorIsValid = propIs(Function, 'constructor');

const hasOwnProperty = invoker(1, 'hasOwnProperty');

const prototypeIsValid = pipe(
  path(['constructor', 'prototype']),
  both(prototypeIsObject, hasOwnProperty('isPrototypeOf')),
);
/**
 * Checks if the argument provided is a plain object
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * const a = { foo: 'bar' };
 *
 * class B {
 *   constructor(str) {
 *     this.foo = str;
 *   }
 * }
 *
 * const c = new B('bar');
 *
 * isPlainObject(a); // true
 * isPlainObject(B); // false
 * isPlainObject(c); // false
 */
const isPlainObject = allPass([prototypeIsObject, constructorIsValid, prototypeIsValid]);

export default isPlainObject;
