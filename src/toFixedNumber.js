import { curry, pipe } from 'ramda';

import toFixed from './toFixed';

/**
 * Limits a number to have n decimals
 *
 * @function
 * @param {Number} decimals - The number of decimals
 * @param {Number} x - The source number
 * @returns {Number}
 *
 * @example
 * toFixed(2, 23.56786); // 23.57
 * toFixed(2)(23.56212); // 23.56
 */
const toFixedNumber = pipe(
  toFixed,
  Number,
);

export default curry(toFixedNumber);
