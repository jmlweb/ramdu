import { complement, has } from 'ramda';

/**
 * Returns true when the object doesn't contain an own property with the name passed
 *
 * @function
 * @param {String} x - The name of the key
 * @param {Object} obj - The object where to find the key
 * @returns {Boolean}
 *
 * @example
 * hasNot('foo', { bar: 1 }); // true
 * hasNot('foo', { foo: 1 }); // false
 */
const hasNot = complement(has);

export default hasNot;
