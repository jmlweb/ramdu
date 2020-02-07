/* eslint-disable no-sparse-arrays */
import assert from 'assert';
import sortByIndexes from '../sortByIndexes';

describe('sortByIndexes', () => {
  it('Regular case', () => {
    const indexes = [0, 3, 2, 1, 4];
    const list = ['a', 'b', 'c', 'd', 'e'];
    const output = ['a', 'd', 'c', 'b', 'e'];
    assert.deepEqual(sortByIndexes(indexes, list), output);
  });

  it('Invalid cases', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(sortByIndexes([], list), []);
    assert.deepEqual(sortByIndexes([3, 2, 1, 4], list), [, 'c', 'b', 'a', 'd']);
    assert.deepEqual(sortByIndexes([undefined, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes([null, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes(['a', 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes([true, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes([false, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes([100, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
    assert.deepEqual(sortByIndexes([-100, 3, 2, 1, 4], list), [,"d", "c", "b", "e"]);
  });
});
