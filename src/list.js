import { identity, unapply } from 'ramda';

/**
 * Creates a list (array) with the arguments received
 *
 * @function
 * @param {...*} arg - Argument received
 * @returns {Array}
 *
 * @example
 * list('a'); // ['a']
 * list('a', 'b', 'c'); // ['a', 'b', 'c']
 */
const list = unapply(identity);

export default list;
