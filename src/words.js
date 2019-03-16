import { split } from 'ramda';

const SYMBOLS = new RegExp(/[/\-_ ]/gi);

/**
 * Splits an string by the most common symbols
 *
 * @function
 * @param {String} str - Received string
 * @returns {Array}
 *
 * @example
 * words('My name is Earl'); //['My', 'name', 'is', 'Earl']
 */
const words = split(SYMBOLS);

export default words;
