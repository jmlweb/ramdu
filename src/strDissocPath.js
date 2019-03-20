import { dissocPath } from 'ramda';

import { strToArr } from './_internal';
import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of dissocPath
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
 *       d: 'bar',
 *     }
 *   }
 * };
 * strDissocPath('a.b.c', obj); // { a: { b: { d: 'bar } } }
 */
const strDissocPath = withEvolvedArgs(
  {
    0: strToArr,
  },
  dissocPath,
);

export default strDissocPath;
