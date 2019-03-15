import { addIndex, map } from 'ramda';

/**
 * Indexed version of map
 *
 * @function
 * @param {Function} fn - The function passed to map, receiving index as second argument
 * @param {Array} arr - Source array
 * @returns {Array}
 *
 * @example
 * mapIndexed((val, idx) => `${idx}.${val}`, ['a', 'b', 'c']); // ['0.a', '1.b', '2.c']
 */
const mapIndexed = addIndex(map);

export default mapIndexed;
