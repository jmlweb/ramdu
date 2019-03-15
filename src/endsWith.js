import { curry, equals, length, multiply, pipe, slice } from 'ramda';

const getStart = pipe(
  length,
  multiply(-1),
);

/**
 * Checks if one string is the end of other
 *
 * @function
 * @param {String} testStr - Test string
 * @param {String} str - String provided
 * @returns {Boolean}
 *
 * @example
 * endsWith('mer', 'mc hammer'); // true
 * endsWith('mar', 'mc hammer'); // false
 */
const endsWith = (testStr, str) =>
  pipe(
    slice(getStart(testStr), Infinity),
    equals(testStr),
  )(str);

export default curry(endsWith);
