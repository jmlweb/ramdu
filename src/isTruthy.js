import { complement } from 'ramda';

import isFalsy from './isFalsy';

/**
 * Complement for isFalsy
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isTruthy('a'); // true
 * isTruthy(1); // true
 * isTruthy(undefined); // false
 * isTruthy(0); // false
 * isTruthy(null); // false
 */
const isTruthy = complement(isFalsy);

export default isTruthy;
