import { always } from 'ramda';

/**
 * Returns always zero
 *
 * @function
 * @param {Any}
 * @returns {Array}
 *
 * @example
 * alwaysZero(); // 0
 * alwaysZero(1); // 0
 */
const alwaysZero = always(0);

export default alwaysZero;
