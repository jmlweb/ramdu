import { append, flip } from 'ramda';

/**
 * Appends in reverse order
 *
 * @function
 * @param {Array} list - The array where to append
 * @param {*} val - The item to be prepended
 * @returns {Array}
 *
 * @example
 * reverseAppend(['f', 'o'], 'o'); // ['f', 'o', 'o']
 * reverseAppend(['f', 'o'])('o'); //['f', 'o', 'o']
 */
const reverseAppend = flip(append);

export default reverseAppend;
