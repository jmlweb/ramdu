import { complement, has } from 'ramda';

/**
 * Returns true when the object or the prototype chain doesn't contain
 * a property with the specified name
 *
 * @function
 * @param {String} x - The name of the property
 * @param {Object} obj - The object where to find the property
 * @returns {Boolean}
 *
 * @example
 * class Foo {
 *   constructor() {
 *     this.x = 'foo value';
 *   }
 * }
 *
 * hasNotIn('bar', Foo); // true
 * hasNotIn('constructor', Foo); // false
 */
const hasNot = complement(has);

export default hasNot;
