import { equals, modulo, pipe, __ } from 'ramda';

/**
 * Checks if the number version of the argument provided is even
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isEven(2); // true
 * isEven(3); // false
 */
const isEven = pipe(
  Number,
  modulo(__, 2),
  equals(0),
);

export default isEven;
