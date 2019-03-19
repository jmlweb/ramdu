import assert from 'assert';
import castArray from '../castArray';

describe('castArray', () => {
  it('wraps a string in an array', () => {
    assert.deepEqual(castArray('a'), ['a']);
  });
  it('keeps an array', () => {
    assert.deepEqual(castArray(['a']), ['a']);
  });
  it('returns the same when undefined', () => {
    assert.equal(castArray(undefined), undefined);
  });
});
