import { complement, isEmpty } from 'ramda';

/**
 * Complement for isEmpty
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isNotEmpty('a'); // true
 * isNotEmpty({ a: 'a' }); // true
 * isNotEmpty(''); // false
 * isNotEmpty({}); // false
 */
const isNotEmpty = complement(isEmpty);

export default isNotEmpty;
