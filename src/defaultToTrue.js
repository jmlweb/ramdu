import { defaultTo } from 'ramda';

/**
 * Defaults to true
 *
 * @function
 * @param {Any}
 * @returns {Any|String}
 *
 * @example
 * defaultToTrue(undefined); // true
 * defaultToTrue(false); // false
 */
const defaultToTrue = defaultTo(true);

export default defaultToTrue;
