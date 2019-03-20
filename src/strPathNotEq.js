import { complement, nAry } from 'ramda';

import strPathEq from './strPathEq';

/**
 * Complement version of strPathEq
 *
 * @function
 * @param {String} str - String representing the path, separated with dots
 * @param {*} val - The value to compare with
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
 * strPathNotEq('a.b.c', 'bar', obj); // true
 * strPathNotEq('a.b.c', 'foo', obj); // false
 */
const strPathNotEq = complement(nAry(3, strPathEq));

export default strPathNotEq;
