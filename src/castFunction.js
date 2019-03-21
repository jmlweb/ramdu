import { always, is, unless } from 'ramda';

/**
 * Forces an argument to be a function
 *
 * @function
 * @param {*}
 * @returns {Function}
 *
 * @example
 * castFunction('a'); // () => 'a'
 * castFunction(() => 'a'); // () => 'a'
 */
const castFunction = unless(is(Function), always);

export default castFunction;
