import { curry, gte, length, pipe } from 'ramda';

/**
 * Checks if the first argument is greather than or equal the length of the second argument
 *
 * @function
 * @param {Number} val - The length value
 * @param {String|Array} list - The list to compare
 * @returns {Boolean}
 *
 * @example
 * lengthLt(4, 'foo'); // true
 * lengthLt(4, ['a', 'b', 'c']); // true
 * lengthLt(3, 'foo'); // true
 */
const gteLength = curry((val, list) =>
  pipe(
    length,
    gte(Number(val)),
  )(list),
);

export default gteLength;
