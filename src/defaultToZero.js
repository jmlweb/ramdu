import { defaultTo } from 'ramda';

/**
 * Defaults to zero
 *
 * @function
 * @param {Any}
 * @returns {Any|String}
 *
 * @example
 * defaultToZero(undefined); // 0
 * defaultToZero(1); // 1
 */
const defaultToZero = defaultTo(0);

export default defaultToZero;
