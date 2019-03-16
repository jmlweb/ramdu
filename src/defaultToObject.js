import { defaultTo } from 'ramda';

/**
 * Defaults to an empty object
 *
 * @function
 * @param {Any}
 * @returns {Any|Object}
 *
 * @example
 * defaultToObject(undefined); // {}
 * defaultToObject('foo'); // 'foo'
 */
const defaultToObject = defaultTo({});

export default defaultToObject;
