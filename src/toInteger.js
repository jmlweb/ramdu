import { partialRight } from 'ramda';

/**
 * Converts a number to a integer of base 10
 *
 * @function
 * @param {Number} x - The source number
 * @returns {Number}
 *
 * @example
 * toInteger(23.56212); // 23
 */
const toInteger = partialRight(parseInt, [10]);

export default toInteger;
