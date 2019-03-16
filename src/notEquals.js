import { complement, equals } from 'ramda';

/**
 * Complement for equals
 *
 * @function
 * @param {*} firstVal - First Value
 * @param {*} secondVal - Second Value
 * @returns {Boolean}
 *
 * @example
 * notEquals('a', 'b'); // true
 * notEquals('a', 'a'); // false
 */
const notEquals = complement(equals);

export default notEquals;
