import assert from 'assert';
import defaultToArray from './defaultToArray';

describe('defaultToArray', () => {
  it('works', () => {
    assert.deepEqual(defaultToArray(undefined), []);
    assert.deepEqual(defaultToArray('foo'), 'foo');
  });
});
