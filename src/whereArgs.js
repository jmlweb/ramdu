import { pipe, where } from 'ramda';

import list from './list';

/**
 * Applies where function over the arguments received
 *
 * @function
 * @param {pred} obj - Object with the predicates, where each key is the index of the argument
 * @returns {Function}
 *
 * @example
 * whereArgs({
 *   0: lt(1),
 *   1: gt(3),
 * })(2, 2); // true
 */
const whereArgs = pred =>
  pipe(
    list,
    where(pred),
  );

export default whereArgs;
