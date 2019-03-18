import { defaultTo } from 'ramda';

/**
 * Defaults to false
 *
 * @function
 * @param {Any}
 * @returns {Any|String}
 *
 * @example
 * defaultToFalse(undefined); // false
 * defaultToFalse(true); // true
 */
const defaultToFalse = defaultTo(false);

export default defaultToFalse;
