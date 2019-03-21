import { append, curry, slice, pipe, when } from 'ramda';

import ltLength from './ltLength';

/**
 * Cuts the string and adds an ellipsis (…) when the length
 * is greater than the data provided
 *
 * @function
 * @param {Number} maxChars - The max number of characters allowed
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * ellipsize(9, 'My name is Earl'); //'My name i…'
 * ellipsize(40)('My name is Earl'); //'My name is Earl'
 */
const ellipsize = curry((maxChars, str) =>
  when(
    ltLength(maxChars),
    pipe(
      slice(0, maxChars),
      append('…'),
    ),
  )(str),
);

export default ellipsize;
