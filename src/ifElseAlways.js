import { always, ifElse } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * Executes ifElse over 2 fixed values, passed as second and third argument
 *
 * @function
 * @param {Function} pred - The predicate
 * @param {*} trueValue - Value returned when pred evaluates true
 * @param {*} falseValue - Value returned when pred evaluates false
 * @param {*} val - The value to evaluate
 * @returns {trueValue|falseValue}
 *
 * @example
 * ifElseAlways(prop('foo'), 'a', 'b', { foo: true }); // 'a'
 * ifElseAlways(prop('foo'), 'a', 'b', { foo: false }); // 'b'
 */
const ifElseAlways = withEvolvedArgs(
  {
    1: always,
    2: always,
  },
  ifElse,
);

export default ifElseAlways;
