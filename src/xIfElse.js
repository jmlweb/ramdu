import { curry } from 'ramda';
import ifElseAlways from './ifElseAlways';

/**
 * Replacement for ternary operator.
 * When the first argument is true, it returns the second argument,
 * otherwise, it returns the third argument.
 *
 * @function
 * @param {*} pred - The fixed value for predicate
 * @param {*} trueValue - Value returned when pred evaluates true
 * @param {*} falseValue - Value returned when pred evaluates false
 * @returns {Function}
 *
 * @example
 * xIfElse(true, 'a', 'b'); // 'a'
 * xIfElse(false, 'a', 'b'); // 'b'
 */
const xIfElse = curry((pred, trueValue, falseValue) => ifElseAlways(pred, trueValue, falseValue)());

export default xIfElse;
