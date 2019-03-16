import { defaultTo } from 'ramda';

/**
 * Defaults to an empty array
 *
 * @function
 * @param {Any}
 * @returns {Any|Array}
 *
 * @example
 * defaultToArray(undefined); // []
 * defaultToArray('foo'); // 'foo'
 */
const defaultToArray = defaultTo([]);

export default defaultToArray;
