import assert from 'assert';
import defaultToObject from './defaultToObject';

describe('defaultToObject', () => {
  it('works', () => {
    assert.deepEqual(defaultToObject(undefined), {});
    assert.deepEqual(defaultToObject('foo'), 'foo');
  });
});
