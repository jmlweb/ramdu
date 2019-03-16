import { always } from 'ramda';

/**
 * Returns always an empty string
 *
 * @function
 * @param {Any}
 * @returns {String}
 *
 * @example
 * stubString(); // ''
 * stubString('foo'); // ''
 */
const stubString = always('');

export default stubString;
