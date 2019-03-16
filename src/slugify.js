import { join, replace, pipe, toLower } from 'ramda';

import deburr from './deburr';
import words from './words';

/**
 * Transform a string to a slug
 *
 * @function
 * @param {String} str - Received string
 * @returns {String}
 *
 * @example
 * slugify('My name is Earl'); //'my-name-is-earl'
 * slugify('José Manuel Lucas Muñoz'); //'jose-manuel-lucas-munoz'
 */
const slugify = pipe(
  toLower,
  deburr,
  words,
  join('-'),
  replace(/[^a-zA-Z\d-]+/g, ''),
);

export default slugify;
