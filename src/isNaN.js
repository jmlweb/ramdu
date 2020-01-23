import { equals } from 'ramda';

/**
 * Checks if the value type is NaN (Not a number)
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isNaN(undefined); // false
 * isNaN(null); // false
 * isNaN(0); // false
 * isNaN(''); // false
 * isNaN(1); // false
 * isNaN('a'); // false
 * isNaN(Number('1')); // false
 * isNaN(Number('a')); // true
 */
const isNaN = equals(NaN);

export default isNaN;
