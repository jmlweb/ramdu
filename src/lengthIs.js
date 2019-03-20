import { curry, equals, length, pipe } from 'ramda';

/**
 * Checks if the length of the second argument equals the first argument
 *
 * @function
 * @param {Number} val - The length value
 * @param {String|Array} list - The list to compare
 * @returns {Boolean}
 *
 * @example
 * lengthIs(3, 'foo'); // true
 * lengthIs(3, ['a', 'b', 'c']); // true
 */
const lengthIs = curry((val, list) =>
  pipe(
    length,
    equals(Number(val)),
  )(list),
);

export default lengthIs;
