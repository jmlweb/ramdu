import { complement } from 'ramda';

import isBetween from './isBetween';

/**
 * Checks if the third argument provided is between the first and the second arguments
 *
 * @function
 * @param {Number} min - The min limit
 * @param {Number} max - The max limit
 * @param {Number} val - The current value
 * @returns {Boolean}
 *
 * @example
 * isBetween(1, 5, 4); // true
 * isBetween(1, 3, 4); // false
 */
const isNotBetween = complement(isBetween);

export default isNotBetween;
