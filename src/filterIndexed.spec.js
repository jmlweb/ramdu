import assert from 'assert';
import filterIndexed from './filterIndexed';

describe('filterIndexed', () => {
  it('works', () => {
    assert.deepEqual(filterIndexed((_, idx) => idx % 2 === 0, ['a', 'b', 'c']), ['a', 'c']);
  });
});
