import { complement } from 'ramda';

import isNaN from './isNaN';

/**
 * Checks if a parsed number is not a number
 *
 * @function
 * @param {*} val - Checks if the value type is not NaN (Not a number)
 * @returns {Boolean}
 *
 * @example
 * isNotNaN(undefined); // true
 * isNotNaN(null); // true
 * isNotNaN(0); // true
 * isNotNaN(''); // true
 * isNotNaN(1); // true
 * isNotNaN('a'); // true
 * isNotNaN(Number('a')); // false
 * isNotNaN(Number('1')); // true
 */
const isNotNaN = complement(isNaN);

export default isNotNaN;
