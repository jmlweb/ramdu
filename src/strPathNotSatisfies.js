import { complement, nAry } from 'ramda';

import strPathSatisfies from './strPathSatisfies';

/**
 * Complement version of strPathSatisfies
 *
 * @function
 * @param {Function} pred - The predicate
 * @param {String} str - String representing the path, separated with dots
 * @param {Object} obj - Received Object
 * @returns {Boolean}
 *
 * @example
 *
 * const obj = {
 *   a: {
 *     b: {
 *       c: 'foo',
 *     }
 *   }
 * };
 * strPathNotSatisfies(equals('foo'), 'a.b.c', obj); // false
 * strPathNotSatisfies(isEmpty, 'a.b.c', obj); // true
 */
const strPathNotSatisfies = complement(nAry(3, strPathSatisfies));

export default strPathNotSatisfies;
