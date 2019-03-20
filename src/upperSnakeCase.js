import { pipe, toUpper } from 'ramda';

import snakeCase from './snakeCase';

/**
 * Transform a string to snake_case
 *
 * @function
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * snakeCase('My name is Earl'); //'MY_NAME_IS_EARL'
 * snakeCase('José Manuel Lucas Muñoz'); //'JOSE_MANUEL_LUCAS_MUNOZ'
 */
const upperSnakeCase = pipe(
  snakeCase,
  toUpper,
);

export default upperSnakeCase;
