import assert from 'assert';
import defaultToString from './defaultToString';

describe('defaultToObject', () => {
  it('works', () => {
    assert.deepEqual(defaultToString(undefined), '');
    assert.deepEqual(defaultToString('foo'), 'foo');
  });
});
