import { complement, isNil } from 'ramda';

/**
 * Complement for isNil
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isNotNil('a'); // true
 * isNotNil(undefined); // false
 */
const isNotNil = complement(isNil);

export default isNotNil;
