import { complement } from 'ramda';

import endsWith from './endsWith';

/**
 * Complement for endsWith
 *
 * @function
 * @param {String} testStr - Test string
 * @param {String} str - String provided
 * @returns {Boolean}
 *
 * @example
 * notEndsWith('mar', 'mc hammer'); // true
 * notEndsWith('mer', 'mc hammer'); // false
 */
const notEndsWith = complement(endsWith);

export default notEndsWith;
