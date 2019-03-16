import { adjust, is, join, pipe, toUpper, when } from 'ramda';

import camelCase from './camelCase';

/**
 * Transform a string to PascalCase
 *
 * @function
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * camelCase('My name is Earl'); //'MyNameIsEarl'
 * camelCase('my-name-is-earl'); //'MyNameIsEarl'
 */
const pascalCase = pipe(
  camelCase,
  adjust(0, toUpper),
  when(is(Array), join('')),
);

export default pascalCase;
