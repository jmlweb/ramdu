import { always } from 'ramda';

/**
 * Returns always an empty array
 *
 * @function
 * @param {Any}
 * @returns {Array}
 *
 * @example
 * stubArray(); // []
 * stubArray('foo'); // []
 */
const stubArray = always([]);

export default stubArray;
