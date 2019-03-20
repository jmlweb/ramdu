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
 * strNotHasPath('a.b.d', obj); // true
 * strNotHasPath('a.b.c', obj); // false
 */
const strNotHasPath = complement(binary(strHasPath));

export default strNotHasPath;
