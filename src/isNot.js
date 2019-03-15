import { complement, is } from 'ramda';

/**
 * Returns true when the type is not like the one provided
 *
 * @function
 * @param {*} type - The type to avoid
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isNot(String, 1); // true
 * isNot(String, undefined); // true
 * isNot(String, '1'); // false
 */
const isNot = complement(is);

export default isNot;
