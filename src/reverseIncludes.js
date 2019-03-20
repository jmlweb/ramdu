import { includes, flip } from 'ramda';

/**
 * Checks if the list supplied as first argument contains the value supplied as second
 *
 * @function
 * @param {Array|String} list - The list where to search
 * @param {*} val - The value to compare
 * @returns {Boolean}
 *
 * @example
 * reverseIncludes('foo', 'f'); // true
 * reverseIncludes(['f', 'o', 'o'], 'f'); // true
 */
const reverseIncludes = flip(includes);

export default reverseIncludes;
