import { curry, is } from 'ramda';

/**
 * Sort items in a list, indicating the new indexes
 *
 * @function
 * @param {Array} indexes - Array with new indexes
 * @param {Array} list - The list that will be sorter with the new indexes
 * @returns {Array}
 *
 * @example
 * const indexes = [0,3,2,1,4];
 * const incIndexes = [3,2,1,4]
 * const list = ["a", "b", "c", "d", "e"];
 *
 * sortByIndexes(indexes, list); // ["a", "d", "c", "b", "e"]
 * sortByIndexes(incIndexes, list); // [undefined, "c", "b", "a", "d"]
 */

const sortByIndexes = curry((indexes, list) =>
  list.reduce(
    (acc, curr, index) => {
      const newIndex = indexes[index];
      if (is(Number, newIndex) && newIndex < list.length && newIndex >= 0) {
        acc[newIndex] = curr;
      }
      return acc;
    },
    [],
    list,
  ),
);

export default sortByIndexes;
