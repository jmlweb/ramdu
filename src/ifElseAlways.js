import { always, ifElse } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';
import castFunction from './castFunction';

/**
 * Executes ifElse over 2 fixed values, passed as second and third argument
 *
 * @function
 * @param {Function} pred - The predicate
 * @param {*} trueValue - Value returned when pred evaluates true
 * @param {*} falseValue - Value returned when pred evaluates false
 * @returns {Function}
 *
 * @example
 * ifElseAlways(prop('foo'), 'a', 'b', { foo: true }); // 'a'
 * ifElseAlways(prop('foo'), 'a', 'b', { foo: false }); // 'b'
 */

const ifElseAlways = withEvolvedArgs(
  {
    0: castFunction,
    1: always,
    2: always,
  },
  ifElse,
);

export default ifElseAlways;
