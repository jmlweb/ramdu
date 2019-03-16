import { defaultTo } from 'ramda';

/**
 * Defaults to an empty string
 *
 * @function
 * @param {Any}
 * @returns {Any|String}
 *
 * @example
 * defaultToString(undefined); // ''
 * defaultToString('foo'); // 'foo'
 */
const defaultToString = defaultTo('');

export default defaultToString;
