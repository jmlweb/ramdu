import { hasPath, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of hasPath
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
 * strHasPath('a.b.c', obj); // true
 * strHasPath('a.b.d', obj); // false
 */
const strHasPath = withEvolvedArgs(
  {
    0: split('.'),
  },
  hasPath,
);

export default strHasPath;
