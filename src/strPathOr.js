import { pathOr, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of pathOr
 *
 * @function
 * @param {*} defaultVal - Default Value
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
 * strPathOr('bar', 'a.b.d', obj); // bar
 * strPathOr('bar', 'a.b.c', obj); // foo
 */
const strPathOr = withEvolvedArgs(
  {
    1: split('.'),
  },
  pathOr,
);

export default strPathOr;
