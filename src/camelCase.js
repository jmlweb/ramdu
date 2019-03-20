import { adjust, join, map, pipe, toLower } from 'ramda';

import capitalize from './capitalize';
import deburr from './deburr';
import words from './words';

/**
 * Transform a string to camelCase
 *
 * @function
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * camelCase('My name is Earl'); //'myNameIsEarl'
 * camelCase('my-name-is-earl'); //'myNameIsEarl'
 */
const camelCase = pipe(
  deburr,
  words,
  map(capitalize),
  adjust(0, toLower),
  join(''),
);

export default camelCase;
