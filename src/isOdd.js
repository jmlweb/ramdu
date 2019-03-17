import { complement } from 'ramda';

import isEven from './isEven';

/**
 * Checks if the number version of the argument provided is odd
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isOdd(3); // true
 * isOdd(4); // false
 */
const isOdd = complement(isEven);

export default isOdd;
