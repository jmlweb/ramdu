import { adjust, join, map, pipe, toLower } from 'ramda';

import capitalize from './capitalize';
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
  words,
  map(
    pipe(
      toLower,
      capitalize,
    ),
  ),
  adjust(0, toLower),
  join(''),
);

export default camelCase;
