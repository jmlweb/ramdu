import { pathSatisfies, split } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * String version of pathSatisfies
 *
 * @function
 * @param {Function} pred - The predicate
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
 * strPathSatisfies(equals('foo'), 'a.b.c', obj); // true
 * strPathSatisfies(isEmpty, 'a.b.c', obj); // false
 */
const strPathSatisfies = withEvolvedArgs(
  {
    1: split('.'),
  },
  pathSatisfies,
);

export default strPathSatisfies;
