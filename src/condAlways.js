import { always, adjust, cond, map } from 'ramda';

import withEvolvedArgs from './withEvolvedArgs';

/**
 * Executes cond, but returning fixes values, passed as second argument to predicate
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
    0: map(adjust(1, always)),
  },
  cond,
);

export default condAlways;
