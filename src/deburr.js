import { invoker, pipe, replace } from 'ramda';

const normalizer = invoker(1, 'normalize');

/**
 * Removes diacritical marks
 *
 * @function
 * @param {String} str - Source string
 * @returns {String}
 *
 * @example
 * deburr('José Manuel Lucas Muñoz'); // 'Jose Manuel Lucas Munoz'
 */
const deburr = pipe(
  normalizer('NFD'),
  replace(/[\u0300-\u036f]/g, ''),
);

export default deburr;
