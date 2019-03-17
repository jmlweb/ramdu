import { addIndex, filter } from 'ramda';

/**
 * Indexed version of filter
 *
 * @function
 * @param {Function} fn - The function passed to filter, receiving index as second argument
 * @param {Array} arr - Source array
 * @returns {Array}
 *
 * @example
 * filterIndexed((val, idx) => idx % 2 === 0, ['a', 'b', 'c']); // ['a', 'c']
 */
const filterIndexed = addIndex(filter);

export default filterIndexed;
