import { path, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of path
 *
 * @function
 * @param {String} str - String representing the path, separated with dots
 * @param {Object} obj - Received Object
 * @returns {*}
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
 * strPath('a.b.c', obj); // 'foo'
 * strPath('a.b.c')(obj); // 'foo'
 */
const strPath = withEvolvedArgs(
  {
    0: split('.'),
  },
  path,
);

export default strPath;
