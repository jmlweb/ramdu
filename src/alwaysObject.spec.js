import assert from 'assert';
import alwaysObject from './alwaysObject';

describe('alwaysObject', () => {
  it('works', () => {
    assert.deepEqual(alwaysObject(), {});
  });
});
