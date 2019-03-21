import { curry, gt, length, pipe } from 'ramda';

/**
 * Checks if the first argument is greather than the length of the second argument
 *
 * @function
 * @param {Number} val - The length value
 * @param {String|Array} list - The list to compare
 * @returns {Boolean}
 *
 * @example
 * lengthLt(4, 'foo'); // true
 * lengthLt(4, ['a', 'b', 'c']); // true
 */
const gtLength = curry((val, list) =>
  pipe(
    length,
    gt(Number(val)),
  )(list),
);

export default gtLength;
