import { filter, identity } from 'ramda';

/**
 * Removes falsy values from an array
 *
 * @function
 * @param {Array} arr - Source array
 * @returns {Array}
 *
 * @example
 * compact([undefined, 1, null, 'a', '']); // [1, 'a']
 */
const compact = filter(identity);

export default compact;
