import { complement, includes } from 'ramda';

/**
 * Complement for includes
 *
 * @function
 * @param {*} searched - The value searched
 * @param {Array} list - The list where to find the value
 * @returns {Boolean}
 *
 * @example
 * notIncludes('a', ['b', 'c']); // true
 * notIncludes('b', ['b', 'c']); // false
 */
const notIncludes = complement(includes);

export default notIncludes;
