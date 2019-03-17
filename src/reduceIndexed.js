import { addIndex, reduce } from 'ramda';

/**
 * Indexed version of reduce
 *
 * @function
 * @param {Function} fn - The function passed to reduce, receiving index as third argument for the reducer fn
 * @param {Array} arr - Source array
 * @returns {*}
 *
 * @example
 * reduceIndexed((acc, curr, idx) => `${acc}${curr}.${idx},`, '', ['a', 'b', 'c']); // 'a.0,b.1,c.2,'
 */
const reduceIndexed = addIndex(reduce);

export default reduceIndexed;
