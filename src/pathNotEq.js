import { complement, pathEq } from 'ramda';

/**
 *  Complement for pathEq
 *
 * @function
 * @param {Array} x - The path
 * @param {*} val - The value for comparison
 * @param {Object} obj - The object where to find the key
 * @returns {Boolean}
 *
 * @example
 * pathNotEq(['foo', 'bar'], 'a', { foo: { bar: 'b' } }); // true
 * pathNotEq(['foo', 'bar'], 'a', { foo: { bar: 'a' } }); // false
 */
const pathNotEq = complement(pathEq);

export default pathNotEq;
