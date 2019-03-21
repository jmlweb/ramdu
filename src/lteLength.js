import { curry, lte, length, pipe } from 'ramda';

/**
 * Checks if the first argument is less than or equal the length of the second argument
 *
 * @function
 * @param {Number} val - The length value
 * @param {String|Array} list - The list to compare
 * @returns {Boolean}
 *
 * @example
 * lengthLt(2, 'foo'); // true
 * lengthLt(2, ['a', 'b', 'c']); // true
 * lengthLt(3, 'foo'); // true
 */
const lteLength = curry((val, list) =>
  pipe(
    length,
    lte(Number(val)),
  )(list),
);

export default lteLength;
