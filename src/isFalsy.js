import { either, isEmpty, equals, pipe } from 'ramda';

/**
 * Checks if the boolean version of the argument provided is false
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isFalsy(undefined); // true
 * isFalsy(null); // true
 * isFalsy(0); // true
 * isFalsy(''); // true
 * isFalsy(1); // false
 * isFalsy('a'); // false
 */
const isFalsy = either(
  isEmpty,
  pipe(
    Boolean,
    equals(false),
  ),
);

export default isFalsy;
