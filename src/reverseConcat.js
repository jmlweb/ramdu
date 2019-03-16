import { concat, flip } from 'ramda';

/**
 * Concatenates in reverse order
 *
 * @function
 * @param {Array|String} a - The group to be added at the end
 * @param {Array|String} b - The group to be added at the start
 * @returns {Array|String}
 *
 * @example
 * reverseConcat('oo', 'f'); // foo
 * reverseConcat(['o', 'o'], ['f']); //['f', 'o', 'o']
 */
const reverseConcat = flip(concat);

export default reverseConcat;
