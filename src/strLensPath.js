import { lensPath } from 'ramda';

import { strToArr } from './_internal';
import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of lensPath
 *
 * @function
 * @param {String} str - String representing the path, separated with dots
 * @param {*} val - The value to be setted
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
 *
 * const fooLens = strLensPath('a.b.c');
 * view(fooLens, obj); // 'foo'
 */
const strLensPath = withEvolvedArgs(
  {
    0: strToArr,
  },
  lensPath,
);

export default strLensPath;
