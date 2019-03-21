import { always, evolve, cond, map } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';
import castFunction from './castFunction';

/**
 * Executes cond, but returning fixed values, passed as second argument to predicate
 *
 * @function
 * @param {Array} pred - The predicate
 * @param {*} val - The value to evaluate
 * @returns {*}
 *
 * @example
 *
 * const fn = condAlways([
 *   [prop('foo'), 'a'],
 *   [prop('bar'), 'b'],
 * ]);
 *
 * fn({ foo: true }); // 'a'
 * fn({ bar: true }); // 'b'
 * fn({}); // undefined
 */
const condAlways = withEvolvedArgs(
  {
    0: map(
      evolve({
        0: castFunction,
        1: always,
      }),
    ),
  },
  cond,
);

export default condAlways;
