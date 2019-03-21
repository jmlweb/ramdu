import { prepend, flip } from 'ramda';

/**
 * Appends in reverse order
 *
 * @function
 * @param {Array} list - The array where to append
 * @param {*} val - The item to be prepended
 * @returns {Array}
 *
 * @example
 * reversePrepend(['o', 'o'], 'f'); // ['f', 'o', 'o']
 * reverseAppend([2, 3])(1); //[1, 2, 3]
 */
const reversePrepend = flip(prepend);

export default reversePrepend;
