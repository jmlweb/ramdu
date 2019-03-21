import assert from 'assert';
import defaultToString from '../defaultToString';

describe('defaultToString', () => {
  it('works', () => {
    assert.deepEqual(defaultToString(undefined), '');
    assert.deepEqual(defaultToString('foo'), 'foo');
  });
});
