import { pathEq, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of pathEq
 *
 * @function
 * @param {String} str - String representing the path, separated with dots
 * @param {*} val - Value to compare with
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
 * strPathEq('a.b.c', 'foo', obj); // true
 * strPathEq('a.b.c', 'bar', obj); // false
 */
const strPathEq = withEvolvedArgs(
  {
    0: split('.'),
  },
  pathEq,
);

export default strPathEq;
