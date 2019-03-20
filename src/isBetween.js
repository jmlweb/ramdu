import { both, curry, lte, gte } from 'ramda';

const isBetweenSrc = (min, max, val) => both(lte(min), gte(max))(val);

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
const isBetween = curry(isBetweenSrc);

export default isBetween;
