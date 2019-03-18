import { always } from 'ramda';

/**
 * Returns always an empty string
 *
 * @function
 * @param {Any}
 * @returns {String}
 *
 * @example
 * alwaysString(); // ''
 * alwaysString('foo'); // ''
 */
const alwaysString = always('');

export default alwaysString;
