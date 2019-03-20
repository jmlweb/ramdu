import { replace, pipe } from 'ramda';

import slugify from './slugify';

/**
 * Transform a string to snake_case
 *
 * @function
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * snakeCase('My name is Earl'); //'my_name_is_earl'
 * snakeCase('José Manuel Lucas Muñoz'); //'jose_manuel_lucas_munoz'
 */
const snakeCase = pipe(
  slugify,
  replace(/-/g, '_'),
);

export default snakeCase;
