import { always } from 'ramda';

/**
 * Returns always an empty array
 *
 * @function
 * @param {Any}
 * @returns {Array}
 *
 * @example
 * alwaysArray(); // []
 * alwaysArray('foo'); // []
 */
const alwaysArray = always([]);

export default alwaysArray;
