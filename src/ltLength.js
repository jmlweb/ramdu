import { curry, lt, length, pipe } from 'ramda';

/**
 * Checks if the first argument is less than the length of the second argument
 *
 * @function
 * @param {Number} val - The length value
 * @param {String|Array} list - The list to compare
 * @returns {Boolean}
 *
 * @example
 * lengthLt(2, 'foo'); // true
 * lengthLt(2, ['a', 'b', 'c']); // true
 */
const ltLength = curry((val, list) =>
  pipe(
    length,
    lt(Number(val)),
  )(list),
);

export default ltLength;
