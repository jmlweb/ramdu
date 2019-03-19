import { assocPath, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of assocPath
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
 * strAssocPath('a.b.c', 'bar', obj); // a.b.c = 'bar'
 * strAssocPath('a.b.c', 'bar')(obj); // a.b.c = 'bar'
 */
const strAssocPath = withEvolvedArgs(
  {
    0: split('.'),
  },
  assocPath,
);

export default strAssocPath;
