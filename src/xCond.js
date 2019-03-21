import condAlways from './condAlways';

/**
 * Replacement for switch
 * It receives an array of arrays of fixed values representing the predicate
 * It returns the value defined in the second position, from the first row where
 * the first position evaluates to true.
 * If no result is found, it returns undefined
 *
 * @function
 * @param {*} pred - The fixed value for predicate
 * @returns {*|undefined}
 *
 * @example
 * const a = 3;
 * const b = 2;
 *
 * xCond([
 *   [a < 2, '1'],
 *   [b < 1, '2'],
 *   [a === 3, '3'],
 *   [a > 2, '4'],
 * ]); // '3'
 * xCond([
 *   [a > 4, 'a'],
 * ]); // undefined
 */
const xCond = pred => condAlways(pred)();

export default xCond;
