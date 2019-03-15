import { adjust, is, join, pipe, toUpper, when } from 'ramda';

/**
 * Capitalizes a string
 *
 * @function
 * @param {String} str
 * @returns {String}
 *
 * @example
 * capitalize('hello'); // 'Hello'
 */
const capitalize = pipe(
  adjust(0, toUpper),
  when(is(Array), join('')),
);

export default capitalize;
