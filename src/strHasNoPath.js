import { complement, binary } from 'ramda';

import strHasPath from './strHasPath';

/**
 * Complement version of strHasPath
 *
 * @function
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
 *
 * strHasNoPath('a.b.d', obj); // true
 * strHasNoPath('a.b.c', obj); // false
 */
const strHasNoPath = complement(binary(strHasPath));

export default strHasNoPath;
