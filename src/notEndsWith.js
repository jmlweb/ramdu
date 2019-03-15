import { complement } from 'ramda';

import endsWith from './endsWith';

/**
 * Complement for endsWith
 *
 * @function
 * @param {*} val - The value provided
 * @returns {Boolean}
 *
 * @example
 * isNotNil('a'); // true
 * isNotNil(undefined); // false
 */
const notEndsWith = complement(endsWith);

export default notEndsWith;
