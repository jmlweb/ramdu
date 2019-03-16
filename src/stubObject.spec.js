import assert from 'assert';
import stubObject from './stubObject';

describe('stubObject', () => {
  it('works', () => {
    assert.deepEqual(stubObject(), {});
  });
});
