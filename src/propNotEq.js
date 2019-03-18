import { complement, propEq } from 'ramda';

/**
 *  Complement for propEq
 *
 * @function
 * @param {String} x - The name of the key
 * @param {*} val - The value for comparison
 * @param {Object} obj - The object where to find the key
 * @returns {Boolean}
 *
 * @example
 * propNotEq('foo', 'a', { foo: 'b' }); // true
 * propNotEq('foo', 'a', { foo: 'a' }); // false
 */
const propNotEq = complement(propEq);

export default propNotEq;
