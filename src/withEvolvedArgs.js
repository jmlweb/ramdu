import { apply, curry, evolve, pipe } from 'ramda';
import list from './list';

/**
 * Transforms the arguments received applying an evolve over the object passed as argument
 * Then, it executes the function passed as argument
 *
 * @function
 * @param {Object} obj - Object with the transformations
 * @param {Function} fn  - function to be applied
 * @returns {Function}
 *
 * @example
 * withEvolvedArgs({
 *   0: toUpper,
 *   1: toLower,
 * }, concat)('Say Hello ', 'To My Little Friend'); // 'SAY HELLO to my little friend'
 */
const withEvolvedArgs = (obj, fn) =>
  pipe(
    list,
    evolve(obj),
    apply(fn),
  );

export default curry(withEvolvedArgs);
