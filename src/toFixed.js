import { invoker } from 'ramda';

/**
 * Converts a number to a string with n decimals
 *
 * @function
 * @param {Number} decimals - The number of decimals
 * @param {Number} x - The source number
 * @returns {String}
 *
 * @example
 * toFixed(2, 23.56786); // '23.57'
 * toFixed(2)(23.56212); // '23.56'
 */
const toFixed = invoker(1, 'toFixed');

export default toFixed;
